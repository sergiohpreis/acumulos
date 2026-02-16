---
date created: Monday, January 5th 2026, 1:10:30 am
date modified: Monday, February 16th 2026, 9:21:41 am
tags:
  - self-hosted
  - tecnologia
draft: false
title: Como esta o meu setup self-hosted atualmente
date: 2026-01-05T01:10:00
---

Atualmente, possuo dois servidores:

## `proxmox`

O objetivo do servidor com proxmox é basicamente rodar um media server (com [ownyourownapps/arrstack](https://github.com/ownyourownapps/arrstack)) + uma outra VM genérica com alguns serviços presentes em [homelab](https://github.com/sergiohpreis/homelab) (como immich, homebox e etc), uma instância de [sergiohpreis/nextcloud](https://github.com/sergiohpreis/nextcloud).

## `beelink`

Basicamente, por hora, esse servidor hospeda a aplicação [[Sobre as motivações que me levaram a criar um agregador de coleções|collector]] que estava no EC2.

## Esquema de Backup

```mermaid
---

title: 3 2 1 Backup Schema

---

flowchart LR

	backup1[[59 23 * * *]] --> |1\. Source N folders |main[("main hdd")]
	backup1 --> |2\. Destination: A folder called 'duplicati' |backup[("backup hdd")]

	backup2[[0 6 * * *]] --> |1\. Source: A folder called 'duplicati' |backup
	backup2 --> |2\. Destination: A folder called 'duplicati' inside a B2 bucket |b2{{"B2 Bucket"}}
```

## Problemas conhecidos

- [ ] Não estou conseguindo acessar a interface web do `proxmox`. Preciso investigar o que esta acontecendo

---