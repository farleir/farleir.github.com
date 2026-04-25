# Boas Práticas, SEO e Acessibilidade Avançada

Este documento contém recomendações para elevar a maturidade do hub/portfólio, introduzindo marcações semânticas avançadas e acomodações de usabilidade para grupos sensíveis. Formatado para o agente de automação.

## 1. Structured Data / JSON-LD (SEO)

**Contexto:** Para que motores de busca (como o Google) e LLMs compreendam o currículo e as especificidades do perfil "Farleir Minozzo" sem depender exclusivamente da interpretação visual de tags HTML, é vital entregar dados estruturados.
**Task:** Adicionar um script tipo `<script type="application/ld+json">` no `<head>` do `index.html`. O script deve descrever um schema do tipo `Person`, incluindo nome, cargo (Cloud Architect, Expert em Governança de Dados), links do "sameAs" (LinkedIn, Lattes, GitHub, Medium), e afiliação (Ecossistema Farleir.app e Sink).
**Result:** Rich Snippets ativados nos motores de busca, resultando numa representação do perfil de altíssima fidelidade e na construção de um forte Knowledge Graph digital.

## 2. Acessibilidade Sensorial (prefers-reduced-motion)

**Contexto:** O projeto utiliza diversas animações de entrada (`animate-reveal`) e um complexo painel de fundo em Canvas (`particles-canvas`). Para usuários que sofrem de distúrbios vestibulares (cinetose) gerados pela web, o movimento excessivo é um forte bloqueador de acessibilidade.
**Task:**
- Adicionar no script base do Canvas uma verificação para `window.matchMedia('(prefers-reduced-motion: reduce)').matches`. Se verdadeiro, o canvas não deve renderizar as partículas móveis (ou renderizar estático).
- Ajustar as classes `.animate-reveal` e as transições CSS com `@media (prefers-reduced-motion: reduce)` anulando as transformações de translação vertical (`translateY`) no CSS e deixando apenas a transição base de opacidade.
**Result:** Cumprimento de padrões avançados de Acessibilidade (A11y). A página honrará a configuração nativa do sistema operacional do usuário, pausando a arte generativa e as animações intensas.

## 3. Otimização para Impressão (Print Stylesheet)

**Contexto:** Perfis corporativos muitas vezes são convertidos em PDF ou impressos por profissionais de RH ou recrutadores técnicos ("Print to PDF"). Atualmente, a versão dark-mode de tela causaria gasto extremo de tinta preta e o fundo em canvas quebra o layout do currículo em papel.
**Task:** Adicionar uma media query `@media print { ... }` na folha de estilos `style.css` ou diretamente em um arquivo separado. A configuração deve forçar o background para branco (`#ffffff`), o texto para preto (`#000000`), esconder o canvas e as seções de vídeo do YouTube (que são inúteis no papel), e ocultar os iframes interativos.
**Result:** Ao clicar em `Ctrl+P` (ou Arquivo -> Imprimir), o site gera magicamente uma versão visual otimizada, assemelhando-se a um currículo ou "Executive Summary" de fácil leitura e PDF nativo.
