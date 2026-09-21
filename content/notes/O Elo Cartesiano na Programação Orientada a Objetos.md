---
created: 2026-02-09T12:25:05-03:00
modified: 2026-02-18T18:53:23-03:00
title: O Elo Cartesiano na Programação Orientada a Objetos
description: O Elo Cartesiano na Programação Orientada a Objetos
permalink:
aliases:
tags:
  - filosofia
  - ciência-da-computação
  - descartes
draft: false
---

Durante a leitura da 3ª Meditação em [[DESCARTES René. Meditações Metafísicas (1641)]], notei que ele utiliza o conceito de "composição", vejamos o seguinte trecho onde ele reflete sobre o que uma pedra necessita para "ser"

> para a pedra começar a ser, ela precisa ter sido **originada** de uma coisa que tem em si **formalmente** ou **eminentemente**, tudo o que participa da composicão da pedra, isto é, que contém em si a mesmas coisas ou outras mais excelentes do que as que estão presentes na pedra
> [[DESCARTES, René. Meditações Metafísicas (1641)]]

Na filosofia cartesiana, nós obtemos apenas idéias das coisas materiais, e essas idéias podem ser mais certas ou menos certas. Quanto mais substancial a idéia (como por exemplo, as teorias matemáticas), mais essa idéia pode ser encontrada formalmente em outros objetos.

Podemos considerar a seguinte descrição, encontrada no Wikipedia, sobre o que é **Programação Orientada a Objeto**:

> "Programação Orientada a Objeto (também conhecida pela sua sigla POO) ou Modelagem Orientada ao Objeto, é um modelo/paradigma de projeto e programação de software baseado na **abstração digital do mundo real**, através da composição e interação entre diversas unidades chamadas de '**objetos**' e as **classes** (representando objetos reais contendo identidade, propriedades e, métodos); baseado em quatro principais componentes da programação: abstração digital, encapsulamento, herança e, polimorfismo."

Será que podemos estabelecer aqui um paralelo entre as **classes** na programação e as **idéias** em Descartes? Ainda no Wikipedia

> usando um objeto que pode ser manipulado, criado **a partir de uma** classe através do instanciamento. Estes possuem métodos que modificam seus próprios dados, definindo o tipo do objeto. **A classe determina o comportamento (métodos), estados possíveis (atributos) e, o relacionamento com os outros objetos.**

Para Descartes, as coisas materiais são representações de idéias (ou imagens), sendo assim, podemos ter ideias mais ou menos corretas a cerca do mundo e o objetivo do conhecimento é fazer com que as idéias que se tenha do mundo seja o mais próximo possível da realidade. Voltando ao exemplo da Pedra, Descartes diz que a pedra *"precisa ter sido originada de uma coisa que tem em si formalmente ou eminentemente, tudo o que participa da composicão da pedra"*, portanto, a pedra precisa ter como base algo que tenha todas as suas potênciais realidades (a grosso modo).

Vejamos em ["OOP Concepts for Beginners: What is Composition?"](https://stackify.com/oop-concepts-composition/) uma boa definição sobre o conceito de composição:

> The concept of composition is often used in the real world, and it should be the same in software development. A car **is not an** engine; it **has one**. And a coffee machine **has a** grinder and a brewing unit, but it **is none** of them.

Ou seja, um carro não é um motor, ele possui um motor, assim como uma maquina de café não é um moedor, mas possui um moedor. Portanto, a idéia de um carro é a composição de diversas outras idéias como "rodas", "volante" e etc, ou ainda, "algo que anda sobre rodas", "algo movido a combustível" e etc.



