# Análise de Segurança e Funcionalidade (Melhorias Futuras)

Este documento descreve melhorias de segurança e funcionalidade para o portal estático. Cada item está formatado como um prompt pronto para ser executado por um agente automatizado (antigravity).

## 1. Atributos em Links Externos

**Contexto:** O portal possui diversos links externos (tag `<a>` com `target="_blank"`) apontando para outros domínios ou para a infraestrutura de curtos `go.farleir.com`.
**Task:** Adicionar os atributos `rel="noopener noreferrer"` em todas as tags `<a>` que possuam `target="_blank"`. Isso previne ataques de "reverse tabnabbing" e melhora o desempenho bloqueando a passagem de referência excessiva.
**Result:** O arquivo `index.html` deve ser atualizado. Nenhum link externo com `target="_blank"` deve existir sem `rel="noopener noreferrer"`.

## 2. Content Security Policy (CSP)

**Contexto:** O portal atual carrega scripts externos do Tailwind, Lucide, Google Analytics e Clarity, mas não possui uma política estrita de segurança de conteúdo, o que pode abrir espaço para injeção de scripts indesejados caso alguma fonte seja comprometida.
**Task:** Implementar uma meta tag de Content Security Policy (CSP) na seção `<head>` do `index.html`. A política deve permitir os domínios atuais de CDN (Tailwind, Unpkg/Lucide, Google Analytics, Microsoft Clarity, e fontes do Google), mas restringir outras fontes de execução de scripts, estilos, e iframes (como do YouTube).
**Result:** O `index.html` contém uma `<meta http-equiv="Content-Security-Policy" content="...">` funcional e que não quebre a renderização de nenhum componente atual do site (fontes, scripts, iframes e estilos inline).

## 3. Subresource Integrity (SRI)

**Contexto:** Os scripts e folhas de estilo importados de CDNs não utilizam hashes de integridade. Se a CDN for comprometida e o arquivo alterado maliciosamente, o portal executará o código comprometido.
**Task:** Adicionar o atributo `integrity` contendo o hash criptográfico correspondente para os scripts estáticos carregados via CDN (ex: Tailwind CSS e Lucide Icons).
**Result:** As tags `<script>` do Tailwind e do Lucide devem possuir atributos `integrity` válidos (ex: `sha384-...` ou `sha256-...`) e `crossorigin="anonymous"`.

## 4. Tratamento de Exceções em Scripts (Animação do Canvas)

**Contexto:** O script de animação de partículas (`particles-canvas`) no final do `index.html` depende do objeto `window` e do tamanho da tela. Se houver falha de carregamento ou num resize bizarro, o script não possui bloco `try...catch` para falhar graciosamente sem travar outras renderizações da página.
**Task:** Envolver a inicialização (`init()`) e animação (`animate()`) do script no `index.html` em blocos `try...catch` com feedback amigável no console.
**Result:** O script de background no `index.html` possui tratamento de exceção básico para aumentar a confiabilidade em dispositivos diversos.
