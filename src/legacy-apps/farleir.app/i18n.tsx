import React, { createContext, useState, useContext, useMemo, useEffect } from 'react';

const translations = {
  en: {
    // Header
    headerTitle: "Farleir's Apps Portal",
    searchPlaceholder: "Search...",

    // Carousel
    featuredAppsHeading: "Featured Apps",

    // App Grid
    allApps: "All Apps",
    noAppsFoundTitle: "No Applications Found",
    noAppsFoundDescription: "Try adjusting your search query or selecting a different category.",

    // App Modal
    openApp: "Open App",
    closeModal: "Close modal",

    // Footer
    footerConnectTitle: "Apps co-created with AI Studio",
    footerConnectText_part1: "This portal is a showcase of apps that require access via a Google account and accepting permissions for ",
    otherApps: "Other Applications",
    
    // App Data
    "app_mermaid-cmap_name": "AI Concept Map Generator",
    "app_mermaid-cmap_description": "Convert Mermaid graphs to Cmap Tools (CXL) with AI assistance.",
    "app_mermaid-cmap_longDescription": "An innovative tool that bridges the gap between Mermaid.js and Cmap Tools. Convert your text-based Mermaid diagrams into the CXL format for conceptual maps. This tool also integrates with Google Gemini to automatically generate, correct, and enhance your graphs, streamlining the process of creating complex visual artifacts.",

    app_anonymizer_name: "Anonymizer Tool",
    app_anonymizer_description: "Anonymize sensitive data to comply with LGPD.",
    app_anonymizer_longDescription: "A powerful tool to automatically detect and anonymize personally identifiable information (PII) in texts, documents, and databases, ensuring compliance with data protection regulations like LGPD and GDPR.",

    "app_lgpd-guardiao_name": "LGPD Guardian",
    "app_lgpd-guardiao_description": "Interactive Data Anonymization Simulator.",
    "app_lgpd-guardiao_longDescription": "An interactive simulator for data anonymization. Upload files (CSV, Excel, PDF, etc.) or paste text, configure additional sensitive fields to be redacted, and see how the data is anonymized in real-time. A great tool for understanding and testing anonymization techniques for LGPD compliance.",

    app_dmn_name: "DMN Validator",
    app_dmn_description: "Validate Decision Model and Notation (DMN) models.",
    app_dmn_longDescription: "A tool for business analysts and developers to validate DMN models. It checks for logical consistency, completeness, and correctness, ensuring your business rules are well-defined and executable without errors.",

    app_pdf2chat_name: "PDF2Chat",
    app_pdf2chat_description: "Chat with your PDF documents for better accessibility.",
    app_pdf2chat_longDescription: "An accessibility tool that transforms static PDF documents into interactive conversations. Upload a PDF and ask questions in natural language to quickly find information, making content more accessible for everyone, including users with disabilities.",

    app_img2alt_name: "Image to Alt Text",
    app_img2alt_description: "AI-powered generator for image alt text.",
    app_img2alt_longDescription: "Improve web accessibility by automatically generating descriptive alt text for your images. Simply provide an image URL or upload a file, and our AI will analyze the image and create a meaningful description for screen readers.",

    app_accessibility_auditor_name: "Accessibility Auditor AI",
    app_accessibility_auditor_description: "Generate simulated accessibility reports with AI.",
    app_accessibility_auditor_longDescription: "Leverage AI to generate simulated accessibility reports and identify common pitfalls before they reach production. Simply enter a URL, and the tool will perform a scan, powered by Google Gemini, to create a simulated audit. This is an excellent tool for developers and designers to get a quick overview of potential accessibility issues for educational and pre-production purposes.",

    app_mcdac_name: "MCDA-C Tool",
    app_mcdac_description: "Multi-Criteria Decision Analysis for complex choices.",
    app_mcdac_longDescription: "An advanced decision-making tool based on the Multi-Criteria Decision Analysis - Constructivist (MCDA-C) methodology. It helps users to structure problems, define criteria, and evaluate alternatives in a collaborative and transparent way.",

    app_nilssen_name: "Nilssen (MCDA-C Engine)",
    app_nilssen_description: "The mathematical engine for the MCDA-C methodology.",
    app_nilssen_longDescription: "A specialized tool that implements the core mathematical calculations of the MCDA-C (Multi-Criteria Decision Analysis - Constructivist) methodology. Named in honor of Professor Leonardo Ensslin from UFSC, Nilssen focuses on processing performance matrices and generating value functions, providing the quantitative foundation for complex decision-making processes.",
    
    // FIX: Quoted keys with hyphens to fix parsing errors.
    "app_mcdac-graph_name": "MCDA-C Graph",
    "app_mcdac-graph_description": "Generate complex MCDA-C process graphs using Mermaid.",
    "app_mcdac-graph_longDescription": "A visual tool for the MCDA-C methodology that leverages the power of Mermaid.js to generate complex diagrams and graphs. This application helps decision-makers visualize the entire decision-making process, from criteria hierarchy to performance analysis, making it easier to understand and communicate complex choices.",

    app_arc_name: "Interactive Application Architect",
    app_arc_description: "Visually design and generate application layouts and components.",
    app_arc_longDescription: "An interactive AI-powered tool to design application architecture visually. Start by selecting a foundational layout like Sidebar, Content Focus, or Dashboard Grid. Then, add and arrange components on the canvas to build your UI. Finally, generate the code or configuration for your design. Perfect for rapidly prototyping web applications.",
    
    // Categories
    category_all: "All",
    category_decision: "Decision",
    category_lgpd: "LGPD",
    category_processes: "Processes",
    category_accessibility: "Accessibility",
  },
  pt: {
    // Header
    headerTitle: "Portal de Apps de Farleir",
    searchPlaceholder: "Buscar...",

    // Carousel
    featuredAppsHeading: "Destaques",

    // App Grid
    allApps: "Todos os Apps",
    noAppsFoundTitle: "Nenhum Aplicativo Encontrado",
    noAppsFoundDescription: "Tente ajustar sua busca ou selecionar uma categoria diferente.",

    // App Modal
    openApp: "Entrar no App",
    closeModal: "Fechar modal",

    // Footer
    footerConnectTitle: "Aplicativos cocriados com IA Studio",
    footerConnectText_part1: "Este portal é uma vitrine de aplicativos que precisam acesso através de conta Google e aceitar permissões para ",
    otherApps: "Outras Aplicações",

    // App Data
    "app_mermaid-cmap_name": "Gerador de Mapa Conceitual com IA",
    "app_mermaid-cmap_description": "Converta grafos Mermaid para Cmap Tools (CXL) com assistência de IA.",
    "app_mermaid-cmap_longDescription": "Uma ferramenta inovadora que conecta Mermaid.js e Cmap Tools. Converta seus diagramas Mermaid baseados em texto para o formato CXL de mapas conceituais. Esta ferramenta também se integra com o Google Gemini para gerar, corrigir e aprimorar automaticamente seus grafos, otimizando o processo de criação de artefatos visuais complexos.",

    app_anonymizer_name: "Ferramenta Anonimizadora",
    app_anonymizer_description: "Anonimize dados sensíveis para conformidade com a LGPD.",
    app_anonymizer_longDescription: "Uma ferramenta poderosa para detectar e anonimizar automaticamente informações de identificação pessoal (PII) em textos, documentos e bancos de dados, garantindo a conformidade com regulamentações de proteção de dados como LGPD e GDPR.",

    "app_lgpd-guardiao_name": "Guardião LGPD",
    "app_lgpd-guardiao_description": "Simulador Interativo de Anonimização de Dados.",
    "app_lgpd-guardiao_longDescription": "Um simulador interativo para anonimização de dados. Carregue arquivos (CSV, Excel, PDF, etc.) ou cole texto, configure campos sensíveis adicionais para serem redigidos e veja como os dados são anonimizados em tempo real. Uma ótima ferramenta para entender e testar técnicas de anonimização para conformidade com a LGPD.",

    app_dmn_name: "Validador DMN",
    app_dmn_description: "Valide modelos de Notação e Modelo de Decisão (DMN).",
    app_dmn_longDescription: "Uma ferramenta para analistas de negócios e desenvolvedores validarem modelos DMN. Verifica a consistência lógica, completude e correção, garantindo que suas regras de negócio estejam bem definidas e executáveis sem erros.",

    app_pdf2chat_name: "PDF2Chat",
    app_pdf2chat_description: "Converse com seus documentos PDF para melhor acessibilidade.",
    app_pdf2chat_longDescription: "Uma ferramenta de acessibilidade que transforma documentos PDF estáticos em conversas interativas. Faça o upload de um PDF e faça perguntas em linguagem natural para encontrar informações rapidamente, tornando o conteúdo mais acessível para todos, incluindo usuários com deficiência.",

    app_img2alt_name: "Imagem para Texto Alternativo",
    app_img2alt_description: "Gerador de texto alternativo para imagens com IA.",
    app_img2alt_longDescription: "Melhore a acessibilidade da web gerando automaticamente texto alternativo descritivo para suas imagens. Basta fornecer a URL de uma imagem ou carregar um arquivo, e nossa IA analisará a imagem e criará uma descrição significativa para leitores de tela.",

    app_accessibility_auditor_name: "Auditor de Acessibilidade AI",
    app_accessibility_auditor_description: "Gere relatórios de acessibilidade simulados com IA.",
    app_accessibility_auditor_longDescription: "Utilize IA para gerar relatórios de acessibilidade simulados e identificar falhas comuns antes que cheguem à produção. Basta inserir uma URL, e a ferramenta fará uma varredura, com a tecnologia do Google Gemini, para criar uma auditoria simulada. Esta é uma excelente ferramenta para desenvolvedores e designers obterem uma visão geral rápida de possíveis problemas de acessibilidade para fins educacionais e de pré-produção.",

    app_mcdac_name: "Ferramenta MCDA-C",
    app_mcdac_description: "Análise de Decisão por Múltiplos Critérios para escolhas complexas.",
    app_mcdac_longDescription: "Uma ferramenta avançada de tomada de decisão baseada na metodologia de Análise de Decisão por Múltiplos Critérios - Construtivista (MCDA-C). Ajuda os usuários a estruturar problemas, definir critérios e avaliar alternativas de forma colaborativa e transparente.",

    app_nilssen_name: "Nilssen (Motor MCDA-C)",
    app_nilssen_description: "O motor matemático para a metodologia MCDA-C.",
    app_nilssen_longDescription: "Uma ferramenta especializada que implementa os cálculos matemáticos centrais da metodologia MCDA-C (Análise de Decisão por Múltiplos Critérios - Construtivista). Nomeada em homenagem ao Professor Leonardo Ensslin da UFSC, a Nilssen foca no processamento de matrizes de desempenho e na geração de funções de valor, fornecendo a base quantitativa para processos complexos de tomada de decisão.",
    
    // FIX: Quoted keys with hyphens to fix parsing errors.
    "app_mcdac-graph_name": "MCDA-C Gráfico",
    "app_mcdac-graph_description": "Gere gráficos complexos do processo MCDA-C com Mermaid.",
    "app_mcdac-graph_longDescription": "Uma ferramenta visual para a metodologia MCDA-C que utiliza o poder do Mermaid.js para gerar diagramas e gráficos complexos. Esta aplicação ajuda os tomadores de decisão a visualizar todo o processo de tomada de decisão, da hierarquia de critérios à análise de desempenho, facilitando a compreensão e a comunicação de escolhas complexas.",

    app_arc_name: "Arquiteto de Aplicações Interativo",
    app_arc_description: "Desenhe e gere visualmente layouts e componentes de aplicativos.",
    app_arc_longDescription: "Uma ferramenta interativa com IA para projetar visualmente a arquitetura de aplicativos. Comece selecionando um layout fundamental como Barra Lateral, Foco em Conteúdo ou Grade de Dashboard. Em seguida, adicione e organize componentes na tela para construir sua interface. Finalmente, gere o código ou a configuração para o seu design. Perfeito para prototipagem rápida de aplicações web.",
    
    // Categories
    category_all: "Todos",
    category_decision: "Decisão",
    category_lgpd: "LGPD",
    category_processes: "Processos",
    category_accessibility: "Acessibilidade",
  },
};

type Locale = 'en' | 'pt';
type I18nContextType = {
  locale: Locale;
  changeLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

// FIX: Explicitly type I18nProvider as a React.FC to resolve a potential type inference issue.
export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'pt') {
      setLocale('pt');
    } else {
      setLocale('en');
    }
  }, []);

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
  };

  const t = (key: string) => {
    const translationsForLocale = translations[locale] as Record<string, string>;
    return translationsForLocale[key] || key;
  };
  
  const value = useMemo(() => ({ locale, changeLocale, t }), [locale, t]);

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};