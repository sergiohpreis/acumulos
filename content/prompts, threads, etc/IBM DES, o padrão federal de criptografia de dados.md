---
created: 2025-04-04T01:39:15-03:00
modified: 2026-02-16T09:35:26-03:00
source: https://chatgpt.com/c/67ef5dbe-af2c-8010-9dbe-a9cadfba76a3
ia:
  - chat-gpt
tags:
  - criptografia
  - chatgpt
  - tecnologia
  - brasil
draft: false
title: IBM DES, o padrão federal de criptografia de dados
---

O **DES (Data Encryption Standard)** é um dos marcos mais importantes da história da criptografia moderna. Criado nos anos 1970, ele foi um padrão de criptografia muito usado em aplicações governamentais, bancárias e comerciais por décadas. Vamos ao que interessa:

---

### 🏢 O que é o DES?

O **DES (Data Encryption Standard)** é um **algoritmo de criptografia simétrica por blocos**, criado pela **IBM** em parceria com a **NSA** e adotado oficialmente pelo **governo dos EUA** em **1977** como padrão federal de criptografia de dados (FIPS PUB 46).

- **Simétrica**: usa a mesma chave para **criptografar e descriptografar**.
- **Por blocos**: processa os dados em **blocos de 64 bits** (8 bytes).
- **Chave**: usa uma chave de **56 bits** (embora tecnicamente seja 64 bits, 8 são usados para verificação de paridade e não para criptografia real).

---

### 🛠️ Como funciona o DES?

O DES transforma cada bloco de 64 bits em outro bloco de 64 bits usando:

1. **Permutações iniciais e finais**.
2. **16 rodadas de substituição e permutação** com base em funções matemáticas.
3. Uso intensivo de **funções S-box** (substituições não-lineares) e **expansões de bits**.
4. A chave é dividida em subchaves para cada rodada.

➡️ O objetivo é confundir e difundir os dados, um conceito proposto por **Claude Shannon** (o pai da teoria da informação).

---

### 🕰️ Contexto histórico

- Criado pela **IBM** nos anos 1970 com o nome original **"Lucifer"**.
- Em 1976, foi modificado e aprovado pelo **NIST** (National Institute of Standards and Technology) e pela **NSA**, e adotado em 1977 como **padrão federal de criptografia** nos EUA.
- Usado amplamente em **bancos, governos e empresas** até os anos 2000.

---

### 🔓 Quebra do DES

Com o avanço da tecnologia, **ataques de força bruta** (testar todas as combinações possíveis de chaves) se tornaram viáveis:

- Em 1998, a **Electronic Frontier Foundation (EFF)** construiu uma máquina chamada **"Deep Crack"**, que quebrou uma chave DES em menos de 3 dias.
- Atualmente, o DES é considerado **inseguro**, pois uma chave de 56 bits é pequena para os padrões modernos.

---

### 🔄 Evolução: 3DES e AES

- **3DES (Triple DES)**: uma variação do DES que aplica o algoritmo **três vezes** com duas ou três chaves diferentes, aumentando a segurança.
- **AES (Advanced Encryption Standard)**: adotado em 2001 como substituto do DES. Muito mais seguro e rápido, com chaves de 128, 192 ou 256 bits.

---

### 📌 Resumo rápido

| Característica | Valor |
|----------------|-------|
| Algoritmo      | DES (Data Encryption Standard) |
| Criado por     | IBM, com apoio da NSA |
| Lançado        | 1977 (como padrão oficial) |
| Tipo           | Criptografia simétrica por blocos |
| Tamanho do bloco | 64 bits |
| Tamanho da chave | 56 bits úteis |
| Situação atual | Obsoleto e inseguro |