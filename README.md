# Farleir's Digital Curator Hub

Bem-vindo ao repositório oficial do meu hub pessoal e portfólio digital, hospedado e disponível globalmente. Este espaço serve como ponto de convergência para minhas iniciativas como Cloud Architect, especialista em Governança de Dados (LGPD/IA), acadêmico e entusiasta da tecnologia. Aqui centralizo links, projetos, Thought Leadership, mídias e ecossistema de aplicações.

## 🌿 Estrutura de Branches

Este repositório adota um fluxo de publicação estruturado e seguro:

- **`main`**: A branch principal de desenvolvimento contínuo. Todo o código-fonte, atualizações de design, novos componentes e experimentações são primeiramente comitados e testados neste ambiente.
- **`gh-pages`**: A branch de produção (deploy). O código consolidado e aprovado na `main` é mesclado ou promovido para a `gh-pages`, a qual aciona a engine do GitHub Pages para renderizar a versão oficial do site que fica disponível ao público.

## 🛠️ Tecnologias Utilizadas

A arquitetura do portal prioriza performance, fluidez e adoção de práticas modernas de web design:

- **HTML5 & CSS3**: Estrutura semântica, acessível e dark-theme nativo moderno.
- **Tailwind CSS**: Utilizado extensivamente via CDN para uma componentização ágil, estilos utilitários de alto desempenho, glassmorphism e responsividade adaptativa para qualquer dispositivo.
- **JavaScript (Vanilla)**: Lógica no client-side para animações em Canvas (engine de partículas de fundo), interatividade avançada e otimização de navegação. Sem dependência de pesados frameworks JS.
- **Lucide Icons**: Biblioteca iconográfica limpa, concisa e de alto contraste via SVG.
- **Google Analytics & Microsoft Clarity**: Implementações macroscópicas focadas em telemetria anônima, performance e análise de mapas de calor para aperfeiçoar de forma pragmática a experiência (UX/UI).

## 🔒 Governança de Segurança e Privacidade

Sendo liderado por um especialista em Governança de Dados, o modelo mental adotado neste portal é o do "Privacy e Security by Design". 

1. **Arquitetura Client-Side:** Como uma aplicação estática, a superfície de vulnerabilidades cai drasticamente em comparação a sistemas com backend dinâmico ou acessos a bancos de dados diretamente na arquitetura.
2. **Minimização de Dados (Data Minimization):** O ecossistema *não* coleta dados sensíveis e não possui formulários que capturem informações PII (Personally Identifiable Information) nesta camada estática. Toda integração externa opera via endpoints seguros, quando aplicável.
3. **Transparência de Monitoramento:** Sistemas analíticos operam restritos ao entendimento de funis de cliques, retenção em tela e rastreabilidade comportamental macro (anônima), alinhados às premissas regulatórias globais.

### Contato para LGPD / Encarregado (DPO)

Tratativas que demandem o exercício dos direitos de titular (informação, exclusão de rastreamento de navegação analítica, requisições sobre consentimento ou incidentes) estão sob administração direta do criador e responsável pelo repositório.

- **Responsável e DPO:** Farleir Luís Minozzo
- **Acionamento Direto:** [contato@farleir.com](mailto:contato@farleir.com) (Especifique "LGPD" ou "Privacidade" no assunto).

---

## ⚖️ Direitos Autorais e Créditos (Copyright)

Toda a identidade visual customizada, textos biográficos, design tokens de thought leadership e arranjos algorítmicos focados no ecossistema de negócio são de propriedade intelectual de **Farleir Luís Minozzo** (&copy; 2026).

Este projeto teve sua base histórica inicial construída sobre templates/bibliotecas open-source e mantém, por lisura, os devidos créditos de seus frameworks ou módulos genéricos iniciais, conforme licenciamento CCA 3.0:

> **Baseado historicamente no Miniport 2.0 by HTML5 UP**  
> html5up.net | @n33co  
> Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)  
> AJ: n33.co @n33co dribbble.com/n33  
> 
> **Credits - Images:**  
> fotogrph (http://fotogrph.com/) | n33 (http://flypixel.com/n33)  
>
> **Credits - Other:**  
> jQuery (jquery.com)  
> html5shiv.js (@afarkas @jdalton @jon_neal @rem)  
> 5grid.js + 5grid-ui.js (n33.co)
