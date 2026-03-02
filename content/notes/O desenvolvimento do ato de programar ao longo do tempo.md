---
date created: Wednesday, June 25th 2025, 12:52:21 pm
date modified: Sunday, March 1st 2026, 11:17:52 pm
tags:
  - spec-driven
  - ciência-da-computação
  - tecnologia
  - técnica
draft: false
date: 2026-03-01T23:20:00
---

Se [[Escrever código significa manifestar as suas intenções por meio de uma linguagem|escrever código significa manifestar as suas intenções por meio de uma linguagem]], me parece que a introdução das inteligências artificiais no fluxo de trabalho dos programadores (por exemplo, #spec-driven ) é mais um momento onde acontece uma mudança na linguagem utilizada para manifestar essa intenção.

Na computação, inicialmente, só era possível manifestar as intenções para o programa por meio de uma linguagem matemática. Com o passar dos anos, surgiram linguagens de baixo nível, mais similares a própria linguagem natural (humana), até o momento onde temos linguagens de alto nível, muito similares a linguagem natural 

Um exemplo de como uma linguagem de alto nível se aproxima muito da linguagem natural ("coma enquanto eu estiver com fome e tiver comida disponível")

```js
foodsAvailable = 10;
hungry = true
while (hungry && foodsAvailable > 0) {
	eat();
}
```

Esse comportamento pode ser especificado como uma rotina de alimentação

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