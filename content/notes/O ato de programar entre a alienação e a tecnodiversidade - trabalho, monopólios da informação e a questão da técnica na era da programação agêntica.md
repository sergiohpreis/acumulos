---
created: 2026-02-26T20:39:16-03:00
modified: 2026-03-02T20:26:20-03:00
tags:
  - filosofia
  - tecnologia
  - marxismo
  - técnica
  - trabalho
  - ciência-da-computação
draft: false
---

## Problema de pesquisa

A sociedade capitalista desenvolve uma dependência crescente e não planejada de um vasto complexo de sistemas tecnológicos interdependentes, mantidos e expandidos por trabalhadores altamente especializados — os programadores. Simultaneamente, a introdução de agentes de IA na programação transforma a forma desse trabalho sem eliminar sua complexidade, produzindo um efeito de fetichização onde a produção parece se multiplicar quando, na verdade, o que se reconfigura são as relações de trabalho e as exigências cognitivas.

**Pergunta**: De que modo a transformação do ato de programar — do código binário à especificação em linguagem natural mediada por agentes de IA — se articula com o [[Crescimento anárquico dos sistemas tecnológicos|crescimento anárquico da dependência tecnológica]] sob o capitalismo, e quais ferramentas conceituais a filosofia da técnica e o materialismo histórico oferecem para compreender criticamente essa articulação?

## Hipótese de trabalho

O ato de programar consiste na [[Escrever código significa manifestar as suas intenções por meio de uma linguagem|manifestação de intenções por meio de uma linguagem técnica]]. Porém, sob as relações capitalistas de produção, **as intenções manifestadas são predominantemente as do capital, não as do trabalhador** — o programador é uma **mediação entre a vontade de quem controla os meios de produção e a execução técnica**. Sua [[O desenvolvimento do ato de programar ao longo do tempo|história revela uma progressiva aproximação entre intenção e interface técnica]] - mas essa "intenção" que se aproxima da máquina não é a do programador: é a do capital **traduzida pelo programador**.

A passagem para o desenvolvimento orientado a especificações ([[Reflexões sobre o desenvolvimento orientado a especificações]]) torna essa alienação mais *visível* (a especificação vem explicitamente de fora), mas não a cria — ela já existia. O spec-driven development reconfigura a alienação sem superá-la, pois não altera as relações de propriedade sobre os meios de produção digitais — concentrados nos [[Monopólios da informação]].

A proposta de tecnodiversidade de Yuk Hui e a [[Reflexões sobre Cybersyn|experiência histórica do Cybersyn]] oferecem horizonte crítico ao demonstrar que outra relação entre intenção, trabalho e técnica é possível — uma em que o trabalhador seja sujeito, não veículo.

## Justificativa

- Crescimento real do consumo de recursos naturais por infraestrutura digital (data centers, IA generativa) — cf. [[Como a relação de dependência se expressa nos variados sistemas e o preço da artificial necessidade da escala infinita]]
- Concentração monopolista da infraestrutura da internet (Cloudflare, Google, Amazon, Microsoft) — cf. [[Os dados produzidos pelos seres humanos são poderosos recursos para o funcionamento dos monopólios da tecnologia]]
- Transformação concreta e em curso do trabalho de programação por agentes de IA — cf. [[Supervisionar o trabalho de uma IA é trabalhar]]
- Carência de análise filosófica rigorosa sobre essas transformações a partir da periferia do capitalismo

---

## Quadro teórico

### Materialismo histórico (Marx)

- Trabalho como atividade vital consciente (Manuscritos 1844)
- Alienação: quatro dimensões aplicadas ao programador
- Subsunção real do trabalho ao capital (Grundrisse, Capítulo VI inédito)
- [[Fetichismo da mercadoria e a produção de software|Fetichismo]]: a IA como ocultamento do trabalho humano na produção de software
- *Nota crítica*: o uso de "fetiche" precisa ser rigoroso — demonstrar **como** a IA produz fetichização, não apenas afirmar

### Filosofia da técnica (Yuk Hui, com apoio em Heidegger e Simondon)

- Cosmotécnica e tecnodiversidade: múltiplas relações possíveis entre cultura e técnica
- Recursividade e contingência: processos não-lineares na programação agêntica
- Gestell (Heidegger): a técnica moderna como enquadramento — o spec-driven development aprofunda ou resiste?
- Individuação técnica (Simondon): microsserviços como "meio associado" contemporâneo
- *Nota crítica*: é necessário ler Heidegger e Simondon diretamente, não apenas via Yuk Hui

### Economia política da tecnologia

- [[Monopólios da informação]]: definição rigorosa (diferente de monopólio industrial clássico)
- Diálogo obrigatório com: Srnicek (capitalismo de plataforma), Zuboff (capitalismo de vigilância), Durand (tecnofeudalismo)
- Dados como forma de acumulação de capital — cf. [[Os dados produzidos pelos seres humanos são poderosos recursos para o funcionamento dos monopólios da tecnologia]]
- Soberania tecnológica e dependência na periferia (Vieira Pinto, perspectiva latino-americana)
- *Nota crítica*: a tese de que big techs são "monopólios da informação" precisa ser construída conceitualmente, não apenas declarada

---

## Estrutura provisória da dissertação

### Cap. 1: Introdução

Problema, justificativa, metodologia.

### Cap. 2: Genealogia do ato de programar — Da linguagem de máquina à linguagem natural

- Tese: programar é manifestar intenções por meio de uma linguagem — cf. [[Escrever código significa manifestar as suas intenções por meio de uma linguagem]]
- Percurso histórico: binário → assembly → alto nível → especificações — cf. [[O desenvolvimento do ato de programar ao longo do tempo]]
- Deslocamento: do "como fazer" ao "o que deve acontecer" — cf. [[Reduzir o nível de abstração entre o que se pretende e o que se executa poderia ser benéfico para o entendimento humano?]]
- Questão: quem produz especificações? (conhecimento técnico permanece necessário) — cf. [[Como o desenvolvimento orientado a especificações pode assimilar o fator iterativo do ato de programar?]]
- **Contexto material**: as ferramentas de spec-driven development e programação agêntica não surgem no vácuo — são desenvolvidas e controladas por grandes monopólios (GitHub Copilot/Microsoft, Claude/Anthropic, Gemini/Google). A genealogia do ato de programar é inseparável da história de quem controla os meios de produção de software

### Cap. 3: O ato de programar como trabalho alienado — Marx e a produção de software

- Trabalho, alienação, subsunção real
- O programador na divisão social do trabalho contemporânea
- "[[Supervisionar o trabalho de uma IA é trabalhar]]" — a não-eliminação do trabalho
- O [[Fetichismo da mercadoria e a produção de software|fetiche da multiplicação]]: mais código produzido = mais código a ser lido. Demonstrar o mecanismo: a IA oculta o trabalho humano, fazendo parecer que o software "se produz sozinho"
- **Condições materiais concretas**: o programador produz para [[Monopólios da informação|monopólios]] que concentram a infraestrutura digital (Cloudflare, Google, Amazon, Microsoft). A alienação é concreta: propriedade intelectual, dados como acumulação de capital, [[Crescimento anárquico dos sistemas tecnológicos|crescimento da infraestrutura sem planejamento social]] (data centers, consumo energético, usinas nucleares para IA). Aqui entra a questão da soberania tecnológica na periferia — o caso brasileiro (data centers estrangeiros em território nacional não significam soberania)
- [[Como a relação de dependência se expressa nos variados sistemas e o preço da artificial necessidade da escala infinita|A competição pela atenção]] e a demanda artificial como motor do crescimento anárquico dos sistemas que o programador mantém

### Cap. 4: Tecnodiversidade como horizonte crítico — Yuk Hui e o Cybersyn

- Cosmotécnica: contra a universalização da técnica
- O Manifesto para uma utilização não singular de IAs como formulação prática de tecnodiversidade
- [[Reflexões sobre Cybersyn]] como contra-exemplo *parcial*: tecnologia participativa, dados mínimos, controle dos trabalhadores — mas reconhecendo limites e tensões (Eden Medina)
- Recursividade e não-determinismo: são realmente problemas novos?
- Apontamentos: princípios para uma relação não alienada com a técnica
- Limites honestos: tecnodiversidade como horizonte, não como solução automática

### Cap. 5: Conclusão

---

## Bibliografia mínima

### Marx

- Manuscritos Econômico-Filosóficos (1844)
- Grundrisse (1857-58)
- O Capital, Livro I, caps. 13-15 (1867)

### Filosofia da técnica

- HUI, Yuk. Tecnodiversidade (2020)
- HUI, Yuk. On the Existence of Digital Objects (2016)
- HUI, Yuk. Recursion and Contingency (2019)
- HEIDEGGER, Martin. A Questão da Técnica (1953) — *leitura pendente*
- SIMONDON, Gilbert. Do modo de existência dos objetos técnicos (1958) — *leitura pendente*
- VIEIRA PINTO, Álvaro. O Conceito de Tecnologia (2005) — *leitura pendente*
- FEENBERG, Andrew. Questioning Technology (1999)

### Economia política da tecnologia

- SRNICEK, Nick. Platform Capitalism (2017) — *leitura pendente*
- ZUBOFF, Shoshana. The Age of Surveillance Capitalism (2019) — *leitura pendente*
- DURAND, Cédric. Techno-féodalisme (2020) — *leitura pendente*
- ANTUNES, Ricardo. O Privilégio da Servidão (2018)
- CRAWFORD, Kate. Atlas of AI (2021)
- MEDINA, Eden. Cybernetic Revolutionaries (2011)

### Filosofia da mente (apoio pontual)

- SEARLE, John. Minds, Brains, and Programs (1980)
- DREYFUS, Hubert. What Computers Still Can't Do (1992)

---

## Leituras prioritárias (antes de submeter o pré-projeto)

1. Manuscritos Econômico-Filosóficos de Marx (trecho sobre trabalho alienado)
2. A Questão da Técnica de Heidegger
3. Platform Capitalism de Srnicek (curto, ~150 páginas, define "capitalismo de plataforma")
4. O Conceito de Tecnologia de Vieira Pinto (vol. 1 pelo menos — pensador brasileiro, valorizado em bancas)

---

## Programas de pós-graduação a investigar

- UFSC — PPG Filosofia (tem linha de pesquisa em filosofia da técnica?)
- USP — PPG Filosofia (tem GT de filosofia da tecnologia)
- Unisinos — PPG Filosofia (publicou sobre Yuk Hui e Simondon)
- UFRJ — PPG Filosofia
- UNICAMP — PPG Filosofia (tradição em filosofia da ciência)
- Programas interdisciplinares: CTS (Ciência, Tecnologia e Sociedade) — podem aceitar candidatos com formação em tecnologia mais facilmente

---

## Lacunas identificadas (autocrítica necessária)

1. O conceito de "[[Monopólios da informação|monopólio da informação]]" precisa ser construído, não apenas afirmado — dialogar com Srnicek, Zuboff, Durand
2. O uso de "anárquico" para o [[Crescimento anárquico dos sistemas tecnológicos|crescimento dos sistemas]] precisa justificar o que há de *específico* na tecnologia (vs. capitalismo em geral)
3. "[[Fetichismo da mercadoria e a produção de software|Fetiche]]" em Marx tem significado técnico — demonstrar o mecanismo de fetichização, não apenas usar a palavra
4. [[Reflexões sobre Cybersyn]] deve ser contra-exemplo *parcial*, não modelo idealizado
5. Falta diálogo com a literatura existente — as reflexões atuais são originais mas isoladas
6. "Ato de programar" precisa de definição precisa: conceito fenomenológico, categoria econômica, ou relação técnica?

---

## Notas do vault relacionadas

- [[Sobre o ato de programar]]
- [[O desenvolvimento do ato de programar ao longo do tempo]]
- [[Escrever código significa manifestar as suas intenções por meio de uma linguagem]]
- [[Reflexões sobre o desenvolvimento orientado a especificações]]
- [[Como o desenvolvimento orientado a especificações pode assimilar o fator iterativo do ato de programar?]]
- [[Reduzir o nível de abstração entre o que se pretende e o que se executa poderia ser benéfico para o entendimento humano?]]
- [[Supervisionar o trabalho de uma IA é trabalhar]]
- [[Como a relação de dependência se expressa nos variados sistemas e o preço da artificial necessidade da escala infinita]]
- [[Os dados produzidos pelos seres humanos são poderosos recursos para o funcionamento dos monopólios da tecnologia]]
- [[Como vive o ser humano cercado por agentes de IA?]]
- [[Reflexões sobre Cybersyn]]
- [[Estudos sobre Obsolescência Programada]]
- [[Como seria possível determinar a correção de uma implementação?]]
- [[Plano para o desenvolvimento de uma pós graduação]]
