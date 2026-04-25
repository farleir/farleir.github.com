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

## 5. Implementação de "Facades" para Vídeos (Lite-YouTube)

**Contexto:** O lazy loading em iframes (item 1) resolve o carregamento massivo na abertura da página, mas quando o usuário rolar a tela, o navegador ainda precisará baixar dezenas de megabytes de scripts pesados do player do YouTube para cada vídeo exibido na tela simultaneamente.
**Task:** Substituir os blocos `<iframe>` da seção "Digital Media" por componentes de "Facade" (como o `lite-youtube-embed` de Paul Irish). Esse padrão carrega apenas a imagem de miniatura (thumbnail) do vídeo disfarçada como player. O iframe real (junto com o JavaScript pesado do Google) só é injetado no DOM quando o usuário ativamente clica para dar "Play".
**Result:** Uma redução vertiginosa na alocação de memória RAM e processamento no momento em que a seção de vídeos entra na tela. A usabilidade e o visual permanecem idênticos, mas a performance aumenta exponencialmente.

## 6. Resource Hints (Preconnect e DNS-Prefetch)

**Contexto:** O site depende de origens de terceiros cruciais: Google Fonts, Tailwind CDN, Google Analytics, Microsoft Clarity, etc. Atualmente, o navegador só resolve o DNS e estabelece as conexões TCP/TLS quando encontra essas tags espalhadas pelo `<head>`.
**Task:** Adicionar as tags `<link rel="preconnect">` e `<link rel="dns-prefetch">` logo no topo da tag `<head>` para os domínios mais lentos e essenciais (ex: `https://fonts.gstatic.com` e `https://cdn.tailwindcss.com`).
**Result:** O processo de negociação segura de conexão com as CDNs (TCP Handshake e TLS negotiation) ocorrerá muito antes no ciclo de carregamento, reduzindo a latência quando os scripts e fontes precisarem de fato ser baixados.
