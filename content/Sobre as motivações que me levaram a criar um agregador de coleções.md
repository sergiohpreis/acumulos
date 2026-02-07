---
date created: Thursday, February 5th 2026, 10:22:35 am
date modified: Saturday, February 7th 2026, 4:14:58 pm
tags:
  - ideias
  - colecionismo
title: Sobre as motivações que me levaram a criar um agregador de coleções
description: Sobre as motivações que me levaram a criar um agregador de coleções
permalink:
aliases:
draft: false
date: 2026-02-07
---

Há algum tempo que eu tenho o hábito de registrar o tempo das minhas sessões de leituras... eu sempre penso que isso é um tanto quanto "neurótico" (eu não sei se é a melhor palavra), mas lendo [[Como Fazer uma Monografia, Délcio Vieira Salomon, 2004]] ele sugere um método para aprimorar a leitura que se baseia também em cronometrar. Mas além disso, eu acho interessante ver como a leitura se faz presente ao longo da minha vida.

Tudo isso me levou a crer que é interessante a idéia de ter uma espécie de "diário de colecionador", onde eu registro as interações. O letterboxd é uma plataforma que propõe isso no ambito dos filmes, você não apenas cataloga o que você já assistiu, mas também, quando assistiu e quais eram as suas percepções no momento.

Foi por isso que eu comecei a desenvolver uma aplicação chamada `collector` ([repositório](https://github.com/sergiohpreis/collector/))

> [!info] Colaboração
> Um grande amigo ja se propôs a desenhar uma interface, e isso é massa! Só precisamos trocar uma ideia para entender como podemos evoluir isso

## Sobre a infraestrutura necessária

Inicialmente, para fins de aprendizado, mantive uma infraestrutura na AWS, com RDS, EC2 e etc. Mas 2 dias me custaram R$ 5, não tem como manter (mesmo sem RDS fica caro). Estou com ele rodando a uns dias em um servidor Debian, e tem me atendido super bem, já tenho planejado um teste de carga, mas não tem pretenção de muitos usos (estamos rodando um beta com convites).

## Algumas idéias

Tenho utilizado ativamente e já fiz a leitura de 2 livros completos, anotando e registrando as sessões por ele: [Realismo Capitalista](https://collector.bacana.info/collections/c92f3c7b-d593-4e0c-9e47-887a92e5700d/items/075e4dff-0585-449f-8256-6d18da18b179) e [Discurso sobre o Método](https://collector.bacana.info/collections/c92f3c7b-d593-4e0c-9e47-887a92e5700d/items/1020f4f4-c34f-4146-96a4-1da3aca6d474) (Em [[Como estruturei meus estudos sobre filosofia]] digo um pouco mais sobre o meu plano para estudar filosofia de maneira autodidata).

Tenho achado muito legal o senso de progresso, e aparentemente me sinto estimulado por isso. Algumas percepções que eu tive usando:

- A interface esta extremamente escura e crua, isso causa um mal estar
- Sinto falta de na tela inicial, ver uma divisão por lidos e etc, ou algum tipo de destaque nos que foram lidos? Não sei, estou pensando
- Gostaria de ter uma visão geral sobre as minhas leituras sabe? Como por exemploo, quantas horas passei lendo em média em um determinado período, ou a evolução temporal... Não sei se vale mais a pena eu passar a registrar métricas em algum esquema pronto (ex: prometheus), ou implementar isso com base no banco de dados (me parece melhor)