---
date created: Thursday, January 29th 2026, 8:23:54 pm
date modified: Thursday, January 29th 2026, 9:08:49 pm
source: https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html
status:
  - finished
finished_at: 2026-01-29T20:46:00
release_at: 2025-10-15
type:
  - texto
published_year: 2026
tags:
  - spec-driven
title:
draft: false
date: 2026-01-29T08:23:00
authors:
  - Birgitta Böckeler
---

> A spec is a structured, behavior-oriented artifact - or a set of related artifacts - written in natural language that expresses software functionality and serves as guidance to AI coding agents.

Eu não gosto de escrever as SPECs pensando apenas em AI coding. Eu gosto bastante de [[Knowledge First (ou Spec-Driven Development), mudou-se a forma de materializar o que se espera da máquina]], porque reforça a idéia de conhecimento

> There is a useful difference to be made I think between specs and the more general context documents for a codebase. That general context are things like rules files, or high level descriptions of the product and the codebase. Some tools call this context a [**memory bank**](https://docs.cline.bot/prompting/cline-memory-bank), so that’s what I will use here. These files are relevant across all AI coding sessions in the codebase, whereas specs only relevant to the tasks that actually create or change that particular functionality.

Isso é interessante, uma forma de definir o que vai e aonde vai. Mas e o problema do overdoc? (Existe esse termo?)

> At first glance, GitHub seems to be [aspiring to a spec-anchored approach](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/) (“That’s why we’re rethinking specifications — not as static documents, but as living, executable artifacts that evolve with the project. Specs become the shared source of truth.

Essa ideia me agrada, porque ai sim parece valoroso (porque no final, somos humanos e sabemos ler)

> A Tessl spec can serve as the main artifact that is being maintained and edited, with the code even marked with a comment at the top saying `// GENERATED FROM SPEC - DO NOT EDIT`

Gostei disso

> Even at this low abstraction level I have seen the non-determinism in action though, when I generated code multiple times from the same spec.

O fator não determinístico é interessante de abordar...

---

[[O não determinismo na programação é realmente um problema introduzido pelo spec-driven development?]]
[[Manifesto para uma utilização não singular de Inteligências Artificiais]]