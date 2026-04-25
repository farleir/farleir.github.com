# Análise de Design, Usabilidade e Expansão de Links

Este documento aponta falhas visuais, problemas de acessibilidade/usabilidade e sugestões para aprimoramento do design e da presença online do curador. Está formatado como prompts estruturados para a ferramenta antigravity.

## 1. Acessibilidade de Foco (Focus Rings)

**Contexto:** Ao navegar pelo portal utilizando apenas o teclado (tecla `Tab`), o feedback visual de elementos focados (`<a>`, `<button>`) é inexistente ou muito sutil, prejudicando a acessibilidade (a11y) para usuários com necessidades especiais.
**Task:** Adicionar classes utilitárias do Tailwind (ex: `focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-obsidian`) em todos os links e elementos interativos do `index.html`.
**Result:** Navegação via teclado perfeitamente visível. Um anel de foco padronizado e com bom contraste aparecerá em todos os elementos selecionados.

## 2. Contraste de Texto sobre Elementos de Interface

**Contexto:** No "Hero Section", os crachás de badges da lateral (ex: "AWS Skills", "AWS Arquiteto", "Google Cloud") utilizam a cor `text-slate-500` para a legenda em fonte tamanho 10px. Esse texto contra o fundo com leve glassmorphism possui um contraste muito baixo, dificultando a leitura rápida.
**Task:** Ajustar a classe de cor da fonte desses textos muito pequenos. Substituir `text-slate-500` por `text-slate-400` ou `text-slate-300`, mantendo o efeito hover já existente.
**Result:** Maior clareza e adequação às diretrizes de contraste WCAG, sem perder a estética tech/dark.

## 3. Validação Preventiva de "Shortlinks"

**Contexto:** O portal depende extensivamente de uma arquitetura de shortlinks (`https://go.farleir.com/...`). Embora o portal seja estático, uma quebra no Sink (encurtador) ou erro de digitação torna a usabilidade nula.
**Task:** Criar um script Bash auxiliar `scripts/check_links.sh` e integrá-lo via GitHub Actions. O script deve varrer o `index.html`, extrair todas as URLs que iniciam com `https://go.farleir.com/` e fazer uma requisição HEAD via curl para verificar se a resposta é um redirecionamento válido (ex: status 301, 302, 307 ou 308), sendo compatível com o ecossistema estático do GitHub Pages.
**Result:** O repositório passa a ter uma ferramenta de auditoria CI/CD (GitHub Actions + Bash) que verifica os links curtos sem depender de linguagens de backend no ambiente de produção.

## 4. Expansão do Ecossistema: Novos Links Encontrados

**Contexto:** Durante uma varredura na internet pelo nome "farleir", foram encontradas contas relevantes em plataformas profissionais e de desenvolvedor que não estão contempladas no rodapé ou no "Arquivo Pessoal".
**Task:** Adicionar as seguintes plataformas ao portfólio de Redes Sociais / Hub Digital:
- **GitHub:** Link para `https://github.com/farleir` (Adicionar ícone respectivo com Lucide, por exemplo no footer ou no Archive Section como "Open Source").
- **Medium:** Link para `https://canobertin.medium.com` (o perfil associado foi identificado através da pesquisa por Farleir Luís Minozzo) - *Nota: confirmar a titularidade correta do link do medium da conta que o Farleir utiliza, ou usar um termo de busca e link genéricos apropriados*. Alternativamente, referenciar `medium.com/@farleir` caso exista.
**Result:** O rodapé e as listas de mídias estarão atualizados, centralizando ainda mais a identidade digital.
