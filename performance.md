# Análise de Performance e Tempo de Carregamento (WPO)

Este documento descreve melhorias de otimização de performance web (Web Performance Optimization - WPO) para o portal estático, visando melhorar o tempo de carregamento, First Contentful Paint (FCP) e Time to Interactive (TTI), fazendo com que os recursos pesados carreguem gradualmente. Cada item está formatado como um prompt pronto para ser executado pelo agente automatizado (antigravity).

## 1. Lazy Loading de Iframes (Vídeos do YouTube)

**Contexto:** A seção "Digital Media" carrega 6 iframes de vídeos do YouTube simultaneamente assim que a página é acessada. Isso gera dezenas de requisições de rede pesadas em background antes mesmo do usuário rolar até essa parte da página, prejudicando muito o tempo de carregamento inicial (Page Load Time).
**Task:** Adicionar o atributo nativo `loading="lazy"` e, se possível, `title="Descrição do vídeo"` em todas as tags `<iframe>` presentes na seção de mídia.
**Result:** Os iframes só iniciarão o download de seus componentes quando o usuário rolar a página para perto da seção de mídias, reduzindo drasticamente as requisições iniciais e economizando banda. O `index.html` deve refletir as mudanças em todos os blocos de vídeo.

## 2. Lazy Loading e Fetch Priority de Imagens

**Contexto:** Imagens pesadas de artigos no "Thought Leadership" e a imagem de perfil (`avatar.png`) estão sendo carregadas com a mesma prioridade. Imagens abaixo da dobra (fora da tela inicial) não precisam ser carregadas imediatamente.
**Task:**
- Na imagem principal (avatar.png) do Hero Section, adicionar `fetchpriority="high"`.
- Nas imagens dos artigos (Unsplash e LinkedIn) localizadas na seção "Thought Leadership", adicionar os atributos `loading="lazy"` e `decoding="async"`.
**Result:** O browser dará prioridade máxima para a foto de perfil do autor e postergará as imagens grandes do final da página até que o scroll exija sua visualização.

## 3. Otimização do Tailwind CSS (CDN vs Build Estático)

**Contexto:** O projeto utiliza o Tailwind via CDN (`<script src="https://cdn.tailwindcss.com..."></script>`). O script do Tailwind no client-side vasculha todo o DOM em tempo real e gera os estilos no navegador. Isso atrasa o First Contentful Paint (FCP), já que a página bloqueia a renderização até que o JavaScript do Tailwind termine sua compilação em tempo de execução.
**Task:** Substituir o uso do script CDN em tempo de execução por um arquivo CSS estático pré-compilado, ou, caso a arquitetura de CDN precise ser mantida estritamente sem build, adicionar o atributo `defer` a scripts não críticos (como Lucide) e considerar técnicas de CSS inline para estilos hiper-críticos do "Hero Section".
**Result:** O `index.html` passa a invocar scripts secundários (como os ícones `lucide.min.js`) de forma não-bloqueante (`defer`), permitindo que a árvore DOM e o Hero Section sejam exibidos instantaneamente.

## 4. Animação Canvas Sob Demanda (Intersection Observer)

**Contexto:** O script do Canvas que gera as partículas animadas inicia imediatamente junto com a carga da página via `requestAnimationFrame`. Em conexões móveis ou dispositivos com baixa capacidade de processamento, isso concorre por recursos de CPU/GPU durante o carregamento crítico.
**Task:** Refatorar o script contido na tag `<script>` no final do corpo da página para utilizar um `IntersectionObserver`. O script do Canvas só deve invocar `requestAnimationFrame(animate)` quando o Hero Section estiver visível, pausando a animação de fundo caso o usuário role até o rodapé.
**Result:** Menor consumo de bateria e CPU, e alívio do processo de renderização inicial da thread principal (Main Thread). O script de fundo deve pausar inteligentemente dependendo de onde o usuário navega.
