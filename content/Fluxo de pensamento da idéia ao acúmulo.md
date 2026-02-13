---
date created: Friday, February 13th 2026, 2:47:54 am
date modified: Friday, February 13th 2026, 3:29:27 am
title: CFluxo de pensamento
description:
permalink:
aliases:
tags:
  - digital-garden
  - jardim-digital
draft: false
date: 2026-02-13
---

A primeira coisa que eu faço quando eu penso em algo que eu quero escrever (que podemos chamar de idéia), é:

1. abrir o Obsidian
2. apertar Ctrl + N
3. Pensar no título que melhor descreve a idéia que eu quero transmitir

Em seguida, eu escolho o seu destino dessa idéia 

```mermaid
flowchart TD

ideia --> inbox
ideia --> outbox
ideia --> particular
```

A partir de então, eu escrevo.

- se é uma idéia que vai ficar no `inbox` eu simplesmente penso em algumas tags e pronto
- se é uma idéia para o `outbox` (e portanto para o jardim digital), copio os atributos básicos (título, draft, date e etc) e preencho

De tempos em tempos eu reviso tudo que está em `draft`.

E ai através de `rm -rf content/* && cp -R ../brain/outbox/* content && npx quartz build --serve` eu consigo ter uma prévia

Através de  `rm -rf content/* && cp -R ../brain/outbox/* content && npx quartz sync` eu faço a publicação

## Refs

- Ver mais sobre jardim digital em
	- [[Reflexões sobre o ato de escrever, de ler e sobre manter um Jardim Digital]]
	- [[Porque eu decidi criar um Digital Garden]]