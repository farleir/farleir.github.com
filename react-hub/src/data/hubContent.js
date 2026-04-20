import React from 'react';
import { 
  Sparkles, 
  Link2, 
  LayoutGrid, 
  Coffee, 
  Cloud, 
  Shield, 
  Lock, 
  Quote 
} from 'lucide-react';

export const HERO_CONTENT = {
  name: 'Farleir',
  avatarUrl: 'https://avatars.githubusercontent.com/u/492476?v=4',
  tagline: 'Expert em Infraestrutura de TI, Cloud Architect e Governança de Dados (LGPD/IA).',
  socialLinks: [
    { label: 'LinkedIn', url: 'https://go.farleir.com/linkedin', type: 'primary' },
    { label: 'GitHub', url: 'https://go.farleir.com/go-footer-github', type: 'secondary' },
    { label: 'Lattes', url: 'https://go.farleir.com/lattes', type: 'secondary' },
  ]
};

export const APP_PROJECTS = [
  {
    title: 'Farleir.app',
    description: 'Portfólio de aplicativos e utilitários cocriados com IA.',
    link: 'https://go.farleir.com/apps',
    icon: <Sparkles size={24} className="text-gradient-accent" />,
    size: 'large',
  },
  {
    title: 'Sink (go.farleir)',
    description: 'Encurtador de links e tracker de analytics customizado.',
    link: 'https://go.farleir.com/go',
    icon: <Link2 size={24} />,
    size: 'medium',
  },
  {
    title: 'Frases do Bingo',
    description: 'Sátira humorística de chavões corporativos.',
    link: 'https://go.farleir.com/bingo',
    icon: <Quote size={24} />,
    size: 'small',
  },
  {
    title: 'Analista de Bagé',
    description: 'Filosofia gaúcha e humor encapsulado em app.',
    link: 'https://go.farleir.com/analista',
    icon: <Coffee size={24} />,
    size: 'small',
  }
];

export const INFRA_PROJECTS = [
  {
    title: 'Arquitetura AWS',
    description: 'Cloud Architect & AWS Solutions Design.',
    link: 'https://go.farleir.com/arquitetoaws',
    icon: <Cloud size={24} />,
  },
  {
    title: 'Governança IA',
    description: 'Diretrizes sobre o uso ético de IA.',
    link: 'https://go.farleir.com/ifsc-otia',
    icon: <Shield size={24} />,
  },
  {
    title: 'LGPD & Biometria',
    description: 'Proteção de dados biométricos e privacidade.',
    link: 'https://go.farleir.com/ifsc-biometria',
    icon: <Lock size={24} />,
  }
];

export const VIDEO_HIGHLIGHTS = [
  {
    title: 'Pitch Novo Energia',
    thumbnail: 'https://img.youtube.com/vi/ngnNzP9cySM/mqdefault.jpg',
    link: 'https://go.farleir.com/yt-novoenergia',
  },
  {
    title: 'Podcast Tecnologia',
    thumbnail: 'https://img.youtube.com/vi/BYA-J9wVkgk/mqdefault.jpg',
    link: 'https://go.farleir.com/yt-podcast',
  },
  {
    title: 'Pick2Me Demo',
    thumbnail: 'https://img.youtube.com/vi/QET-g2i6Ywo/mqdefault.jpg',
    link: 'https://go.farleir.com/yt-pick2me',
  }
];

export const PUBLICATIONS = [
  {
    title: 'Artigo MCDA',
    description: 'Apoio à Decisão aplicado para escolhas técnicas.',
    link: 'https://go.farleir.com/artigomcda',
  },
  {
    title: 'Artigo Pick2Me',
    description: 'Logística urbana e mobilidade ativa.',
    link: 'https://go.farleir.com/artigopick2me',
  },
  {
    title: 'Gestor Profissional',
    description: 'Reflexões sobre gestão e futuro da TI.',
    link: 'https://go.farleir.com/tree-profissionalfuturo',
  }
];
