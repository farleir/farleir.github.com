# Roadmap de Migração e Modernização (Astro + Cloudflare Edge)

Este documento contém a arquitetura evolutiva para transformar o atual portfólio estático em um **Hub Digital Moderno** utilizando **Astro**. A migração permite renderização ultra-rápida (Zero-JS/Islands Architecture), suporte nativo a múltiplos idiomas (i18n), integração transparente de APIs no lado do servidor via Cloudflare Workers, e componentização do código.

As instruções abaixo estão estruturadas como prompts completos (Context, Task, Result) para execução impecável pelo agente `antigravity`.

---

## Fase 1: Bootstrap e Componentização do Layout Base

**Contexto:** O projeto atual é um `index.html` monolítico. Para ganhar escala, manutenção e performance de ponta, precisamos converter a estrutura visual existente em componentes `.astro`, preservando fielmente o Tailwind CSS e as animações em Canvas.
**Task:**
1. Inicializar um projeto Astro (`npm create astro@latest`) configurado para usar o Tailwind CSS.
2. Criar um layout base (`src/layouts/BaseLayout.astro`) que abrigará o `<head>` com meta tags, fontes, CSS global estático e o script Canvas de fundo adaptado.
3. Fatiar o `index.html` nas seguintes "Astro Islands" ou componentes puros (`src/components/`):
   - `Hero.astro`
   - `SocialLinks.astro` (com os SVGs inline)
   - `DigitalMedia.astro` (Iframes do YouTube com Facades)
   - `Certifications.astro`
   - `Footer.astro`
**Result:** O repositório conterá uma estrutura Astro validada rodando localmente (`npm run dev`) que renderiza visualmente um reflexo exato do antigo `index.html`, sem perda de performance ou regressões visuais.

---

## Fase 2: Configuração do Cloudflare Pages e API Fetching no Edge

**Contexto:** O Hub deve ser capaz de puxar dados ao vivo de redes como GitHub (projetos open source) e Medium (Thought Leadership) sem expor chaves de API no navegador do usuário.
**Task:**
1. Instalar o adaptador oficial da Cloudflare no Astro (`npx astro add cloudflare`). A configuração `output: 'server'` deve ser aplicada no `astro.config.mjs` (ou `hybrid`).
2. Criar componentes na página inicial que buscam dados em tempo de compilação ou de requisição (Edge):
   - Exemplo: Criar um componente `<GithubRepos />` cujo bloco frontmatter `---` faz fetch em `https://api.github.com/users/farleir/repos` utilizando `import.meta.env.GITHUB_TOKEN`.
   - Limitar e formatar o retorno JSON e iterar os dados utilizando JSX/Astro syntax.
**Result:** O site se torna dinâmico, exibindo publicações/projetos recentes. A integração do Cloudflare Workers está pronta, e nenhuma chave de API vaza para o bundle do cliente.

---

## Fase 3: Arquitetura Multilinguagem (i18n)

**Contexto:** Como um profissional de alcance global, o portfólio deve atender a diferentes localidades fluindo perfeitamente entre Português e Inglês, seguindo práticas modernas de SEO e usabilidade.
**Task:**
1. Implementar o roteamento nativo i18n do Astro. Configurar os `locales: ['pt-BR', 'en']` e o `defaultLocale: 'pt-BR'` no `astro.config.mjs`.
2. Extrair todas as strings de texto estáticas do "Hero Section", currículo e descrições para dicionários de tradução JSON (ex: `src/i18n/pt.json`, `src/i18n/en.json`).
3. Criar uma função auxiliar ou utilizar uma biblioteca (como `i18next` ou utilitário nativo) para resgatar as traduções.
4. Adicionar um componente `LanguageSwitcher.astro` no topo da página ou no rodapé para alternar o diretório de rotas (ex: de `/` para `/en/`).
**Result:** Navegadores e robôs do Google indexarão ambas as versões do site (com tags `<html lang="pt">` e `<html lang="en">` e meta tags `hreflang` corretas), e o visitante poderá alternar o idioma sem recarregar recursos desnecessários.

---

## Fase 4: Atualização da Pipeline CI/CD (GitHub Actions)

**Contexto:** Com a introdução do NodeJS (package.json) e de processos de compilação, o método antigo de apenas espelhar arquivos HTML na branch de produção não funciona mais. A Cloudflare Pages processará as builds nativamente.
**Task:**
1. Configurar um fluxo no `.github/workflows/deploy.yml` ou conectar diretamente o repositório ao dashboard do Cloudflare Pages.
2. Definir o comando de build como `npm ci && npm run build`.
3. Definir o diretório de output para `dist`.
4. (Opcional) Configurar um worker de Action para publicar deploys de "Preview" em Pull Requests via Wrangler (`npx wrangler pages deploy dist --project-name farleir-dev`).
**Result:** Cada push na branch `main` disparará uma construção automatizada na Cloudflare e fará o deploy imediato na borda global, e PRs gerarão URLs de homologação isoladas.
