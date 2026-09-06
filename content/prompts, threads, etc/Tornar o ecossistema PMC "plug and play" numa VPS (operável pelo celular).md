---
created: 2026-04-14T20:53:37-03:00
modified: 2026-04-14T20:54:32-03:00
tags:
  - ia
  - opus
  - ciência-da-computação
draft: true
---

> [!info]
> *claude --resume 1de971f2-66a3-4d75-80e2-dd3c9f9861c5*

## Context

Hoje o PMC (Personal Message Center) é composto por 4 repos (`wpp-infra`, `wpp-communicator`, `wpp-data-processor`, `wpp-command-processor`) orquestrados por Docker Compose com profiles `dev` e `prod`. O objetivo do usuário é pegar **uma VPS vazia e ter o ecossistema rodando com o mínimo de toques — idealmente do celular**, com segurança adequada para exposição pública.

A exploração mostra que o projeto está **~50% do caminho**: existe `Makefile`, `env.template`, `setup.sh`, imagens publicadas em GHCR, healthchecks básicos e READMEs decentes. Mas há **bloqueadores críticos** para o uso "plug and play em VPS" e **várias falhas de segurança** que tornam imprudente expor isso à internet hoje.

Este plano responde: (1) o quão fácil está hoje, (2) o que impede o plug-and-play via celular, (3) quais são os problemas de segurança, e (4) o que precisa ser feito para chegar lá.

---

## 1. Diagnóstico: o quão fácil está hoje?

### O que já funciona bem

- `wpp-infra/Makefile` com targets claros (`setup`, `dev`, `prod`, `check-setup`, `login-ghcr`).
- `wpp-infra/scripts/setup.sh` clona os 3 repos irmãos automaticamente.
- `wpp-infra/docker-compose.yml` unificado com profiles `dev` (build local) e `prod` (imagens GHCR).
- Imagens publicadas em `ghcr.io/personalmessagecenter/*` via CI.
- Healthchecks em `rabbitmq` e `postgres`.
- Documentação razoável (`wpp-infra/README.md`, `wpp-infra/RELEASE_GUIDE.md`).

### O que quebra o "plug and play"

1. **Setup depende de SSH com chave no GitHub** (`wpp-infra/scripts/setup.sh` clona via `git@github.com:...`). Impossível do celular sem agente SSH configurado. Para `prod`, bastaria apenas `wpp-infra` (as outras imagens vêm do GHCR), mas o `Makefile` assume que os 3 repos estão clonados ao lado.
2. **Não há `.env` auto-gerado com senhas fortes.** O `env.template` tem `CHANGE_ME` e defaults inseguros (`guest`/`guest`, `example`). O usuário precisa editar manualmente.
3. **Não há script "one-liner" de bootstrap** (`curl … | bash`) que instale Docker, clone o `wpp-infra`, gere `.env` e suba tudo.
4. **Sem reverse proxy / TLS / domínio.** Não há ergonomia para apontar um domínio e ter HTTPS automático.
5. **Sem UI de administração remota segura.** Para operar do celular, faltam: painel web protegido, `ssh` mobile-friendly ou bot de operação (ex.: comandos via próprio WhatsApp).
6. **Integração WhatsApp real não está implementada** (`MESSAGE_SOURCE=whatsapp` é placeholder). O pareamento via QR code do `whatsmeow` exige interação no terminal, o que é hostil para celular.
7. **CI publica tag `latest`** (`wpp-communicator/.github/workflows/ci-cd.yml`), mas o `docker-compose.yml` fixa versões (ex.: `1.2.1`) — atualizar em produção exige editar YAML à mão.

### Veredito

Hoje o usuário técnico, de um laptop, com SSH configurado, consegue subir em ~15 min. **Do celular, não é viável** sem trabalho adicional. E **mesmo do laptop, expor à internet é inseguro** sem as correções abaixo.

---

## 2. Problemas de segurança (resumo por severidade)

Detalhamento completo foi levantado; aqui está o essencial para agir:

### Crítico (bloqueia exposição à internet)

- **Credenciais default triviais**: `RABBITMQ_USER/PASS=guest/guest` e `POSTGRES_PASSWORD=example` em `wpp-infra/docker-compose.yml` (linhas 19-20, 37).
- **Portas de infra publicadas no host**: `5672`, `15672` (RabbitMQ), `5432` (Postgres), `8080` (Adminer) — ficam abertas na VPS se não houver firewall.
- **Adminer roda no profile `prod`** (`wpp-infra/docker-compose.yml` ~linha 60): interface de admin do banco exposta em produção.
- **Sem TLS/HTTPS**: nenhum reverse proxy; `DATABASE_URL` usa `sslmode=disable`.

### Alto

- **Containers rodam como root**: `wpp-communicator/Dockerfile`, `wpp-data-processor/Dockerfile`, `wpp-command-processor/Dockerfile` não declaram `USER`.
- **Tags `:latest`** em `alpine:latest` (wpp-communicator, wpp-data-processor) e `adminer:latest`.
- **Go 1.21** em `wpp-data-processor/Dockerfile` e no CI (`ci-cd.yml`) — desatualizado.
- **Sem backup do Postgres**, sem logs centralizados, sem métricas.
- **Sem autenticação entre serviços** além da senha do RabbitMQ.
- **Sem rate limiting** no command-processor.

### Médio

- Sem `SECURITY.md`.
- Sem validação explícita de payload nas mensagens AMQP (risco de injection em futuros comandos).
- Sem segregação de rede Docker (tudo na mesma bridge `wpp-network`).

---

## 3. Plano de ação (em ondas, do mais urgente ao refinamento)

### Onda 1 — Base segura (pré-requisito para qualquer exposição pública)

Arquivos principais: `wpp-infra/docker-compose.yml`, `wpp-infra/env.template`, os 3 `Dockerfile`s.

1. **Remover defaults inseguros** em `docker-compose.yml`: substituir `${RABBITMQ_USER:-guest}` por `${RABBITMQ_USER:?set in .env}` (idem Postgres). Força erro se `.env` não estiver preenchido.
2. **Tirar `ports:` do host** para `rabbitmq` (5672, 15672) e `postgres` (5432) — manter só na rede interna. Acesso admin deve passar pelo reverse proxy com auth.
3. **Adminer apenas no profile `dev`** (remover `"prod"` da lista de profiles dele).
4. **`USER appuser`** nos 3 Dockerfiles (Alpine: `adduser -D -u 10001 appuser`). Ajustar volume do `whatsmeow_data` para caminho não-root (ex.: `/app/data`).
5. **Pinar versões**: `alpine:3.20`, `postgres:15.8`, `rabbitmq:3.13-management`, `adminer:4.8.1`. Remover `latest` do CI.
6. **Atualizar Go 1.21 → 1.23+** em `wpp-data-processor/Dockerfile` e `.github/workflows/ci-cd.yml`.
7. **Adicionar `SECURITY.md`** no `wpp-infra` com canal de report.

### Onda 2 — Bootstrap "one-liner" para VPS

Arquivos novos: `wpp-infra/scripts/bootstrap.sh`, `wpp-infra/scripts/generate-env.sh`, ajustes em `Makefile`.

1. **`bootstrap.sh`** idempotente que numa VPS Ubuntu/Debian limpa:
   - Instala Docker + Compose plugin (script oficial `get.docker.com`).
   - Clona **apenas `wpp-infra`** via HTTPS (sem SSH key).
   - Chama `generate-env.sh` para criar `.env` com senhas aleatórias fortes (`openssl rand -base64 32`).
   - Pergunta (ou aceita via flag) domínio e e-mail para Let's Encrypt.
   - Executa `docker compose --profile prod up -d`.
   - Uso do celular: `ssh vps 'curl -fsSL https://.../bootstrap.sh | bash -s -- --domain meu.dom --email me@x'`.
2. **Desacoplar profile `prod` dos repos irmãos**: no modo `prod`, `docker-compose.yml` só usa imagens GHCR; `make prod` deve funcionar num diretório onde só existe `wpp-infra`. Hoje o `Makefile` e o `check-setup.sh` exigem os 3 repos — relaxar para prod.
3. **`Makefile` targets novos**: `make bootstrap`, `make rotate-secrets`, `make upgrade` (pull de novas tags + restart).

### Onda 3 — Reverse proxy + TLS + UI administrativa

Arquivos novos: `wpp-infra/docker-compose.yml` (serviço novo), `wpp-infra/traefik/` (configs).

1. **Traefik** como serviço no compose, com:
   - Let's Encrypt automático (HTTP-01 ou DNS-01).
   - Redirecionamento 80 → 443.
   - Middleware `basicAuth` (ou `forwardAuth`) para o RabbitMQ Management UI (acessível em `https://rmq.dom.com`).
   - Labels nos serviços de aplicação para roteamento (quando expuserem HTTP).
2. **Firewall host** (`ufw`) no `bootstrap.sh`: só 22, 80, 443.
3. **Dashboard de status mobile-friendly** (opcional mas recomendado): usar `dozzle` (logs) e/ou `uptime-kuma` atrás do Traefik, para monitorar pelo celular.

### Onda 4 — Operação via celular

Opções (escolher 1+):

1. **Via Traefik + painéis web** protegidos por `basicAuth`: RabbitMQ UI, Dozzle (logs), Uptime Kuma. Acessíveis por qualquer navegador mobile.
2. **Bot de operação no próprio WhatsApp**: aproveitar o `wpp-command-processor` para expor comandos admin (`/status`, `/restart <serviço>`, `/logs <serviço> 50`), autenticados por número de telefone em allowlist (`ADMIN_NUMBERS` no `.env`). Requer implementar integração WhatsApp real primeiro (hoje é placeholder).
3. **Atalhos iOS/Android via SSH**: o usuário pode criar shortcuts chamando `make upgrade`/`make logs` via SSH. É o caminho mais rápido, sem desenvolvimento adicional.

### Onda 5 — Resiliência e observabilidade

1. **Backup automático Postgres**: sidecar com `pg_dump` + upload para S3-compatible (Backblaze B2, Cloudflare R2). Cron via container `offen/docker-volume-backup` ou similar.
2. **Logs centralizados**: Loki + Promtail (leve, cabe em VPS pequena) com Grafana atrás do Traefik.
3. **Métricas**: Prometheus + Grafana; exportar métricas dos 3 serviços (adicionar `/metrics` nos apps Go e Spring Actuator no Java).
4. **Healthchecks de aplicação** no compose para `wpp-communicator`, `wpp-data-processor`, `wpp-command-processor` (não só infra).
5. **Política de retenção** e alertas (Grafana Alerting → Telegram/WhatsApp).

### Onda 6 — Integração WhatsApp real (necessária para o caso de uso completo)

Hoje `MESSAGE_SOURCE=whatsapp` em `wpp-communicator/sources/whatsapp/whatsapp.go` é placeholder. Para "plug and play de verdade":
1. Pareamento via **QR code renderizado em página web** (Traefik + endpoint interno no communicator) — não precisa terminal.
2. Alternativa: pareamento via **código de 8 dígitos** (`whatsmeow` suporta), digitável no WhatsApp do celular.
3. Persistir sessão no volume já existente (`whatsmeow_data`).

---

## 4. Arquivos críticos a modificar

| Arquivo | Mudança |
|---|---|
| `wpp-infra/docker-compose.yml` | Remover defaults inseguros, tirar portas públicas, mover Adminer p/ dev, pinar versões, adicionar Traefik |
| `wpp-infra/env.template` | Remover valores default; listar todas as vars obrigatórias |
| `wpp-infra/Makefile` | Novos targets: `bootstrap`, `rotate-secrets`, `upgrade`; relaxar dependência dos 3 repos em `prod` |
| `wpp-infra/scripts/setup.sh` | Aceitar modo "prod-only" (não exigir SSH nem repos irmãos) |
| `wpp-infra/scripts/bootstrap.sh` | **Novo** — one-liner para VPS limpa |
| `wpp-infra/scripts/generate-env.sh` | **Novo** — gera `.env` com senhas fortes |
| `wpp-infra/traefik/` | **Novo** — configs Traefik + Let's Encrypt |
| `wpp-infra/SECURITY.md` | **Novo** |
| `wpp-communicator/Dockerfile` | `USER` não-root, pinar `alpine:3.20` |
| `wpp-data-processor/Dockerfile` | `USER` não-root, Go 1.23+, pinar `alpine:3.20` |
| `wpp-command-processor/Dockerfile` | `USER` não-root |
| `wpp-*/.github/workflows/ci-cd.yml` | Remover tag `latest`; usar Go 1.23+ |
| `wpp-communicator/sources/whatsapp/whatsapp.go` | (Onda 6) pareamento por QR web ou código |

---

## 5. Verificação ponta-a-ponta

Após cada onda, validar:

1. **Onda 1** (segurança base):
   - `docker compose --profile prod config` falha sem `.env` válido.
   - `nmap vps` mostra só 22/80/443 abertos.
   - `docker inspect` confirma `User` não-root nos 3 serviços.
   - `docker scout` ou `trivy image` em cada imagem: zero CVEs críticos.
2. **Onda 2** (bootstrap):
   - Numa VPS Ubuntu 22.04 limpa: `curl … | bash -s -- --domain x --email y` termina com todos os containers `healthy` em <5 min.
   - `.env` gerado tem senhas de 32+ caracteres; permissões `600`.
3. **Onda 3** (TLS):
   - `curl https://rmq.dom.com` retorna 401 sem auth, 200 com auth; cert válido do Let's Encrypt.
   - RabbitMQ e Postgres não respondem em portas públicas.
4. **Onda 4** (celular):
   - Acessar Dozzle/Uptime Kuma do celular via HTTPS, login funciona.
   - (Se bot) enviar `/status` do próprio WhatsApp e receber resposta de serviços `healthy`.
5. **Onda 5** (observabilidade):
   - Matar um container; Uptime Kuma/Grafana notifica em <1 min.
   - `pg_dump` diário aparece no bucket; restauração testada em staging.
6. **Onda 6** (WhatsApp real):
   - Pareamento por QR/código funciona sem terminal.
   - Mensagem enviada ao número pareado flui: `communicator` → RabbitMQ → `data-processor` (persistido) + `command-processor` (resposta) → `communicator` → WhatsApp.

---

## 6. Resposta direta à pergunta

**"O quão fácil está hoje?"**
Do laptop, com SSH/GitHub configurados: moderadamente fácil (15 min). Do celular: **inviável**. Exposto à internet: **inseguro** sem as Ondas 1 e 3.

**"O que precisa ser feito?"**
Ondas 1 + 2 + 3 entregam o "plug and play seguro numa VPS", operável de qualquer navegador mobile. Onda 4 refina a operação móvel. Ondas 5 e 6 levam ao produto completo. A Onda 1 é **pré-requisito não-negociável** antes de qualquer exposição pública.
