import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import AppGrid from './components/AppGrid';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import AppModal from './components/AppModal';
import { 
  DecisionIcon,
  ShieldCheckIcon,
  DataFlowIcon,
  CheckBadgeIcon,
  PDFChatIcon,
  AltTextIcon,
  AppArchitectIcon,
  AccessibilityAuditorIcon,
} from './components/icons/FeatureIcons';
import type { App } from './types';
import { useI18n } from './i18n';

const appsData: App[] = [
  {
    id: 'mermaid-cmap',
    name: 'AI Concept Map Generator',
    url: 'http://go.farleir.com/cmap',
    icon: DataFlowIcon,
    description: 'Convert Mermaid graphs to Cmap Tools (CXL) with AI assistance.',
    category: 'Processes',
    thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    isFeatured: true,
    screenshot: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80',
    longDescription: "An innovative tool that bridges the gap between Mermaid.js and Cmap Tools. Convert your text-based Mermaid diagrams into the CXL format for conceptual maps. This tool also integrates with Google Gemini to automatically generate, correct, and enhance your graphs, streamlining the process of creating complex visual artifacts."
  },
  {
      id: 'mcdac-graph',
      name: 'MCDA-C Graph',
      url: 'http://go.farleir.com/mcda-c',
      icon: DataFlowIcon,
      description: 'Generate complex MCDA-C process graphs using Mermaid.',
      category: 'Decision',
      thumbnail: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      isFeatured: true,
      screenshot: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80',
      longDescription: "A visual tool for the MCDA-C methodology that leverages the power of Mermaid.js to generate complex diagrams and graphs. This application helps decision-makers visualize the entire decision-making process, from criteria hierarchy to performance analysis, making it easier to understand and communicate complex choices."
  },
  {
      id: 'nilssen',
      name: 'Nilssen (MCDA-C Engine)',
      url: 'http://go.farleir.com/nilssen',
      icon: DecisionIcon,
      description: 'The mathematical engine for the MCDA-C methodology.',
      category: 'Decision',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      isFeatured: true,
      screenshot: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80',
      longDescription: "A specialized tool that implements the core mathematical calculations of the MCDA-C (Multi-Criteria Decision Analysis - Constructivist) methodology. Named in honor of Professor Leonardo Ensslin from UFSC, Nilssen focuses on processing performance matrices and generating value functions, providing the quantitative foundation for complex decision-making processes."
  },
  {
      id: 'lgpd-guardiao',
      name: 'Guardião LGPD',
      url: 'https://go.farleir.com/lgpd-guardiao',
      icon: ShieldCheckIcon,
      description: 'Interactive Data Anonymization Simulator.',
      category: 'LGPD',
      thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      isFeatured: true,
      screenshot: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80',
      longDescription: "An interactive simulator for data anonymization. Upload files (CSV, Excel, PDF, etc.) or paste text, configure additional sensitive fields to be redacted, and see how the data is anonymized in real-time. A great tool for understanding and testing anonymization techniques for LGPD compliance."
  },
  {
      id: 'img2alt',
      name: 'Image to Alt Text',
      url: 'https://go.farleir.com/img2alt',
      icon: AltTextIcon,
      description: 'AI-powered generator for image alt text.',
      category: 'Accessibility',
      thumbnail: 'https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      isFeatured: true,
      screenshot: 'https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80',
      longDescription: 'Improve web accessibility by automatically generating descriptive alt text for your images. Simply provide an image URL or upload a file, and our AI will analyze the image and create a meaningful description for screen readers.'
  },
  {
    id: 'anonymizer',
    name: 'Anonymizer Tool',
    url: 'https://go.farleir.com/anonimizador',
    icon: ShieldCheckIcon,
    description: 'Anonymize sensitive data to comply with LGPD.',
    category: 'LGPD',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    screenshot: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80',
    longDescription: 'A powerful tool to automatically detect and anonymize personally identifiable information (PII) in texts, documents, and databases, ensuring compliance with data protection regulations like LGPD and GDPR.'
  },
  {
      id: 'dmn',
      name: 'DMN Validator',
      url: 'https://go.farleir.com/dmn',
      icon: CheckBadgeIcon,
      description: 'Validate Decision Model and Notation (DMN) models.',
      category: 'Processes',
      thumbnail: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      screenshot: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80',
      longDescription: 'A tool for business analysts and developers to validate DMN models. It checks for logical consistency, completeness, and correctness, ensuring your business rules are well-defined and executable without errors.'
  },
    {
      id: 'arc',
      name: 'Interactive Application Architect',
      url: 'https://go.farleir.com/app-arc',
      icon: AppArchitectIcon,
      description: 'Visually design and generate application layouts and components.',
      category: 'Processes',
      thumbnail: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      screenshot: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80',
      longDescription: "An interactive AI-powered tool to design application architecture visually. Start by selecting a foundational layout like Sidebar, Content Focus, or Dashboard Grid. Then, add and arrange components on the canvas to build your UI. Finally, generate the code or configuration for your design. Perfect for rapidly prototyping web applications."
  },
  {
      id: 'pdf2chat',
      name: 'PDF2Chat',
      url: 'https://go.farleir.com/pdf2chat',
      icon: PDFChatIcon,
      description: 'Chat with your PDF documents for better accessibility.',
      category: 'Accessibility',
      thumbnail: 'https://images.unsplash.com/photo-1583521214690-73421a1829a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      screenshot: 'https://images.unsplash.com/photo-1583521214690-73421a1829a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80',
      longDescription: 'An accessibility tool that transforms static PDF documents into interactive conversations. Upload a PDF and ask questions in natural language to quickly find information, making content more accessible for everyone, including users with disabilities.'
  },
  {
      id: 'accessibility_auditor',
      name: 'Accessibility Auditor AI',
      url: 'https://go.farleir.com/sitetest',
      icon: AccessibilityAuditorIcon,
      description: 'Generate simulated accessibility reports with AI.',
      category: 'Accessibility',
      thumbnail: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      screenshot: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80',
      longDescription: "Leverage AI to generate simulated accessibility reports and identify common pitfalls before they reach production. Simply enter a URL, and the tool will perform a scan, powered by Google Gemini, to create a simulated audit. This is an excellent tool for developers and designers to get a quick overview of potential accessibility issues for educational and pre-production purposes."
  },
  {
      id: 'mcdac',
      name: 'MCDA-C Tool',
      url: 'https://go.farleir.com/mcdac',
      icon: DecisionIcon,
      description: 'Multi-Criteria Decision Analysis for complex choices.',
      category: 'Decision',
      thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      isFeatured: false,
      screenshot: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80',
      longDescription: 'An advanced decision-making tool based on the Multi-Criteria Decision Analysis - Constructivist (MCDA-C) methodology. It helps users to structure problems, define criteria, and evaluate alternatives in a collaborative and transparent way.'
  },
];

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedApp, setSelectedApp] = useState<App | null>(null);
  const { t } = useI18n();

  const translatedApps = useMemo(() => {
    return appsData.map(app => ({
      ...app,
      name: t(`app_${app.id}_name`) || app.name,
      description: t(`app_${app.id}_description`) || app.description,
      longDescription: app.longDescription ? (t(`app_${app.id}_longDescription`) || app.longDescription) : undefined,
    }));
  }, [t]);

  const categories = useMemo(() => ['All', ...Array.from(new Set(appsData.map(app => app.category)))], []);
  const featuredApps = useMemo(() => translatedApps.filter(app => app.isFeatured), [translatedApps]);

  const filteredApps = useMemo(() => {
    return translatedApps.filter(app => {
      const originalApp = appsData.find(a => a.id === app.id);
      const matchesCategory = activeCategory === 'All' || originalApp?.category === activeCategory;
      
      const matchesSearch = 
        app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory, translatedApps]);
  
  const handleAppSelect = (app: App) => {
    if (app.longDescription) {
      setSelectedApp(app);
    } else {
      window.open(app.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-300 antialiased flex flex-col">
      <Header 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />
      <Carousel apps={featuredApps} onAppSelect={handleAppSelect} />
      <main className="container mx-auto px-6 py-8 flex-grow">
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-colors duration-200 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {t(`category_${category.toLowerCase()}`) || category}
            </button>
          ))}
        </div>

        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">{t('allApps')}</h2>
            </div>
            <AppGrid apps={filteredApps} onAppSelect={handleAppSelect} />
        </div>
      </main>
      <Footer />
      <AppModal app={selectedApp} onClose={() => setSelectedApp(null)} />
    </div>
  );
};

export default App;
