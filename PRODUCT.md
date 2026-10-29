# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Site estático em HTML, CSS e JavaScript puro (sem framework), publicado no GitHub Pages com o domínio `slashicorp.com.br`. Formulário de contato via Formspree. As páginas são geradas por um script Python fora do repositório e versionadas como HTML.

## Users

- Empresas e times de TI que contratam consultoria de DevOps e Cloud (CI/CD, Kubernetes em EKS/AKS, segurança, observabilidade).
- Empresas e empreendedores que precisam de software sob medida (aplicações web, microsserviços).
- Clientes e usuários dos produtos próprios, SNCR Suite e Radar Político.

## Product Purpose

A SlashiCorp é uma fábrica de software e consultoria de DevOps e Cloud. O site apresenta os serviços, mostra as especialidades e os produtos próprios e leva o visitante ao contato (`contato@slashicorp.com.br`). Sucesso é o visitante entender o que a empresa faz e entrar em contato.

## Positioning

Constrói o software e o entrega pronto para produção, com CI/CD, infraestrutura como código e observabilidade desde o início. Produtos próprios em operação servem de prova de execução, e a equipe tem experiência prática em arquitetura segura em cloud. Atendimento próximo, no mercado brasileiro.

## Operating Context

Conteúdo em português do Brasil. Páginas: Home, Especialidades (111 ferramentas filtráveis por categoria), Cloud, DevOps, Consultoria (diagramas animados de pipeline CI/CD e arquitetura EKS), Produtos e Contato. Os produtos rodam em instâncias gratuitas do Render (`*.onrender.com`), que podem demorar alguns segundos na primeira abertura.

## Capabilities and Constraints

- Hospedagem estática, sem backend próprio.
- Envio de formulário limitado pelo plano gratuito do Formspree.
- Produtos: SNCR Suite (`https://sncr-suite.onrender.com/`) e Radar Político (`https://radar-politico-jbq9.onrender.com/`).
- Domínios próprios para os produtos ainda não existem (decisão em aberto).

## Brand Commitments

Nome SlashiCorp, logo atual (`img/logo.png`, `img/logo-horizontal.png`) e a cor verde-água de acento fazem parte da identidade e devem ser preservados. Tom técnico e direto, em português.

## Evidence on Hand

- Dois produtos reais no ar, com logos em `img/products/`.
- Diagramas de arquitetura próprios na página Consultoria.
- Não há clientes ou cases públicos, depoimentos nem métricas verificadas. Não inventar nenhum deles.

## Product Principles

1. Mostrar o que a empresa realmente entrega, sem inventar provas.
2. Desenvolvimento e DevOps andam juntos: software pronto para produção.
3. Explicar o técnico de forma clara para quem decide, sem esconder a profundidade de quem executa.
4. Cada página leva a um próximo passo claro, em geral o contato.
5. Leve, estático e simples de manter.

## Accessibility & Inclusion

Respeitar `prefers-reduced-motion` (já feito nos diagramas animados) e manter bom contraste e navegação por teclado. Layout responsivo, com menu em hambúrguer em telas pequenas.
