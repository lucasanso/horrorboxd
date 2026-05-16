# Horrorboxd

O **Horrorboxd** é uma plataforma web social dedicada exclusivamente a entusiastas do cinema de terror. Inspirado no formato clássico do Letterboxd, o projeto está sendo desenvolvido para ser o espaço definitivo onde fãs do gênero podem catalogar, avaliar, revisar e discutir produções de horror — desde os clássicos do *slasher* e *giallo* até o terror psicológico moderno e produções *indie* *found footage*.

---

## Design & Atmosfera

Diferente de interfaces convencionais, a identidade visual do Horrorboxd reflete a estética do próprio gênero:
* Paleta de Cores: Predominância de tons escuros (preto absoluto e cinza grafite) para simular o ambiente de uma sala de cinema escura, com contrastes em vermelho carmim/sangue para destaques de ações e interações.
* Interface Limpa e Visual: Foco total nos pôsteres dos filmes e em uma tipografia que equilibre legibilidade com a personalidade sombria do projeto.

---

## Arquitetura e Fluxo de Dados

A mecânica por trás do Horrorboxd foi desenhada pensando em escalabilidade de dados e consumo eficiente de APIs:

1.  Catálogo de Filmes: Integração com bases de dados de cinema (como a TMDB API) para consumo automatizado de metadados, pôsteres, elencos e diretores.
2.  Armazenamento Relacional e Operacional: Gerenciamento de usuários, logs de atividade, curtidas e relacionamentos de rede social estruturados de forma robusta.
3.  Mecanismo de Busca e Descoberta: Indexação de títulos e tags de subgêneros para garantir que a busca por termos específicos ou diretores de nicho seja instantânea.

---

## Objetivo do Repositório

Este documento serve como a especificação de escopo e visão geral do produto para o desenvolvimento da plataforma, centralizando os requisitos de interface, experiência do usuário (UX) e modelagem de dados voltados para a comunidade de cinema de terror.
