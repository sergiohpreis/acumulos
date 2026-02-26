---
date created: Wednesday, June 25th 2025, 12:52:21 pm
date modified: Thursday, February 26th 2026, 7:31:12 pm
tags:
  - spec-driven
  - ciência-da-computação
  - tecnologia
title: O desenvolvimento da profissão do programador ao longo do tempo
draft: false
date: 2025-06-25T12:52:00
---

Penso que [[Escrever código significa manifestar as suas intenções por meio de uma linguagem]], nesse sentido, me parece que a introdução das inteligências artificiais no fluxo de trabalho dos programadores é mais um momento onde acontece uma mudança na linguagem utilizada para realizar essa intenção.

Para se escrever um programa, no início da computação, era necessário um profundo conhecimento matemático (a linguagem portanto seria a matemática?). As linguagens de baixo nível surgiram, e com o passar dos anos, as linguagens de programação tornaram-se cada vez mais próxima a linguagem natural.

| **Era**                     | **Linguagem Primária**    | **Foco do Programador**       |
| --------------------------- | ------------------------- | ----------------------------- |
| **Baixo Nível**             | Binário / Assembly        | Gestão de memória e CPU       |
| **Alto Nível (JS, Python)** | Lógica Computacional      | Algoritmos e Fluxos           |
| **Spec-Driven**             | Linguagem Natural / Specs | Intenção, Regras e Resultados |

Por exemplo:

```js
foodsAvailable = 10;
hungry = true
while (hungry && foodsAvailable > 0) {
	eat();
}
```

Se eu explicar para alguém que é leigo em programação que `&&` significa justamente a conjunção lógica "e", é possível inferir que esse trecho escrito em uma linguagem de programação chamada Javascript significa: "enquanto eu estiver com fome e tiver comida disponível, como".

Através do spec-driven, podemos dizer:

```markdown
# Spec: Rotina de Alimentação

**Contexto:** Garantir que o indivíduo se alimente enquanto houver necessidade e recursos.

**Critérios de Sucesso:**
1. A ação `comer` deve ser executada repetidamente.
2. **Condição de Parada A:** O estado de `fome` ser alterado para falso.
3. **Condição de Parada B:** O estoque de `comida` chegar a zero.

**Restrições:**
- Não iniciar a ação se não houver comida disponível.
- Interromper imediatamente se o recurso se esgotar durante o processo.
```

Essa transição é uma mudança de "como fazer" (imperativo) para "o que deve acontecer" (declarativo / intensional). A especificação deixa de ser um manual de instruções e passa a ser um contrato de realidade, e ainda, parece que com relação a carga cognitiva existe um deslocamento da sintaxe para a funcionalidade.

---

- Será que [[Spec driven development pode ajudar programadores com déficit de atenção?]]

> [!note] 2026-02-26 - 19:29
> O título desse texto era "O desenvolvimento da profissão do programador ao longo do tempo", mas eu acho que para investigar isso de maneira mais filosófica, vale a mudança de "O desenvolvimento da profissão do programador ao longo do tempo" para **"O desenvolvimento do ato de programar ao longo do tempo"**