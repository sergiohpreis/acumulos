---
created: 2026-01-29T21:08:15-03:00
modified: 2026-03-02T00:19:35-03:00
tags:
  - spec-driven
  - ciência-da-computação
  - reflexões
draft: false
---

Em [[Spec-driven development with AI - Get started with a new open source toolkit (2026)]] é proposto a seguinte definição para spec-driven development:

> Instead of coding first and writing docs later, in spec-driven development, you start with a (you guessed it) spec. This is a contract for **how your code should behave** and becomes the **source of truth** your tools and AI agents use to **generate**, **test**, and **validate code**. The result is less guesswork, fewer surprises, and higher-quality code.

Em [[Understanding Spec-Driven-Development - Kiro, spec-kit, and Tessl (2026)]], a autora levanta algumas questões a cerca do "não-determinísmo":

> Even at this low abstraction level I have seen the non-determinism in action though, when I **generated code multiple times from the same spec**. It was an interesting exercise to iterate on the spec and make it more and more specific to increase the repeatability of the code generation. That process reminded me of some of the pitfalls and challenges of writing an unambiguous and complete specification.

> With LLMs, we are not constrained by a predefined and parseable spec language anymore, and we don’t have to build elaborate code generators. The price for that is LLMs’ non-determinism of course... I wonder if spec-as-source, and even spec-anchoring, might end up with the downsides of both MDD and LLMs: Inflexibility _and_ non-determinism.


Existe uma certa crença entre os programadores de que um código por si pode transmitir o entendimento necessário para a compreensão do sistema, entretanto, parece que a adoção de documentos como [[Architecture decision record (ADR)]] mostram que em algum sentido, as vezes mais contexto do que o código será necessário. Será que essa ausência de contexto pode tornar um sistema não determinístico, ao fazer com que certos contratos sejam mais sucetíveis a um rompimento? Não é incomum vermos testes que falham de maneiras não determinística, e isso significa no fundo a cenários não previstos (ex: concorrência).