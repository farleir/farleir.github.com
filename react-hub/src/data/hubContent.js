import React from 'react';
import { 
  Sparkles, 
  Link2, 
  Coffee, 
  Cloud, 
  Shield, 
  Lock, 
  Quote, 
  Github, 
  Linkedin, 
  Youtube, 
  Camera, 
  FileText, 
  Award, 
  Globe,
  Mail,
  Zap
} from 'lucide-react';

export const HERO_CONTENT = {
  name: 'Farleir Luís Minozzo',
  avatarUrl: './src/assets/avatar_premium.png',
  tagline: 'Cloud Architect | IT Infrastructure Expert | Data Governance',
  summary: 'Com mais de 15 anos de carreira, construo ecossistemas de tecnologia robustos, escaláveis e seguros por design. Especialista em arquitetura multi-cloud (AWS, Azure, GCP) com foco em governança (ITIL, COBIT) e conformidade (LGPD, GDPR).',
  socialLinks: [
    { label: 'LinkedIn', url: 'https://go.farleir.com/linkedin', icon: <Linkedin size={20} />, type: 'primary' },
    { label: 'GitHub', url: 'https://go.farleir.com/github', icon: <Github size={20} />, type: 'secondary' },
    { label: '500px', url: 'https://go.farleir.com/500px', icon: <Camera size={20} />, type: 'secondary' },
    { label: 'YouTube', url: 'https://go.farleir.com/youtube', icon: <Youtube size={20} />, type: 'secondary' },
    { label: 'Blog', url: 'https://go.farleir.com/blog', icon: <Globe size={20} />, type: 'secondary' },
    { label: 'Contato', url: 'mailto:farleir@gmail.com', icon: <Mail size={20} />, type: 'secondary' },
  ]
};

export const SKILLS = {
  categories: [
    {
      name: 'Infraestrutura & Cloud',
      items: ['Arquitetura Cloud Native', 'AWS Solutions Architect', 'Proxmox / KVM', 'Azure AD', 'Cloudflare']
    },
    {
      name: 'Governança & Seguranca',
      items: ['LGPD / GDPR', 'ITIL / COBIT', 'Cibersegurança', 'Gestão de Dados']
    },
    {
      name: 'Desenvolvimento',
      items: ['Python / IA', 'React / SPA', 'PHP / SQL', 'Automação industrial']
    }
  ],
  languages: [
    { name: 'Português', level: 'Nativo' },
    { name: 'English', level: 'Full Professional' },
    { name: 'Espanhol', level: 'Professional Working' },
    { name: 'Italian', level: 'Limited Working' }
  ]
};

export const APP_PROJECTS = [
  {
    title: 'Farleir.app',
    description: 'Portfólio de apps e ferramentas cocriadas com IA.',
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
    title: 'Monitor de Status',
    description: 'Uptime e monitoramento de serviços em tempo real.',
    link: 'https://go.farleir.com/status',
    icon: <Zap size={24} />,
    size: 'small',
  },
  {
    title: 'Analista de Bagé',
    description: 'Humor e filosofia gaúcha encapsulada.',
    link: 'https://go.farleir.com/analista',
    icon: <Coffee size={24} />,
    size: 'small',
  }
];

export const INFRA_PROJECTS = [
  {
    title: 'Patente: Filtro de Linha',
    description: 'Disposição Construtiva Aplicada em Filtro de Linha (Mestrado IFSC).',
    link: 'https://go.farleir.com/patente',
    icon: <FileText size={24} />,
    badge: 'Patent'
  },
  {
    title: 'Governança IA',
    description: 'Políticas de implementação de IA no setor público.',
    link: 'https://go.farleir.com/ifsc-newsia',
    icon: <Shield size={24} />,
  },
  {
    title: 'Cloud Architecture',
    description: 'Projetos escaláveis em AWS e Cloudflare.',
    link: 'https://go.farleir.com/arquitetoaws',
    icon: <Cloud size={24} />,
  }
];

export const VIDEO_HIGHLIGHTS = [
  { title: 'Pitch Novo Energia', thumbnail: 'https://img.youtube.com/vi/ngnNzP9cySM/mqdefault.jpg', link: 'https://go.farleir.com/yt-novoenergia' },
  { title: 'Podcast Tecnologia', thumbnail: 'https://img.youtube.com/vi/BYA-J9wVkgk/mqdefault.jpg', link: 'https://go.farleir.com/yt-podcast' },
  { title: 'Pick2Me Demo', thumbnail: 'https://img.youtube.com/vi/QET-g2i6Ywo/mqdefault.jpg', link: 'https://go.farleir.com/yt-pick2me' },
  { title: 'TEDx Speaker', thumbnail: 'https://img.youtube.com/vi/placeholder/mqdefault.jpg', link: 'https://go.farleir.com/tedx' }
];

export const PHOTOGRAPHY_SAMPLES = [
  { url: 'https://images.500px.net/1098765/placeholder1.jpg', link: 'https://go.farleir.com/500px' },
  { url: 'https://images.500px.net/1098765/placeholder2.jpg', link: 'https://go.farleir.com/500px' },
  { url: 'https://images.500px.net/1098765/placeholder3.jpg', link: 'https://go.farleir.com/500px' },
  { url: 'https://images.500px.net/1098765/placeholder4.jpg', link: 'https://go.farleir.com/500px' },
];

export const PUBLICATIONS = [
  { title: 'Artigo: MCDA Decision', description: 'Metodologia de Apoio à Decisão.', link: 'https://go.farleir.com/artigomcda' },
  { title: 'Artigo: Pick2Me Logistic', description: 'Mobilidade urbana e logística.', link: 'https://go.farleir.com/artigopick2me' },
  { title: 'Destaque Sinapse', description: 'Prêmio Empresa Destaque IV.', link: 'https://go.farleir.com/patente' },
];

export const CAREER_TIMELINE = [
  {
    role: "Analista de TI - Gestão de Dados",
    company: "IFSC",
    period: "2024 - Presente",
    details: ["Liderança em projetos de Governança de Dados", "Implementação de políticas de IA", "Cloud Operations"]
  },
  {
    role: "Analista de Cibersegurança",
    company: "IFSC",
    period: "2023 - 2024",
    details: ["Implementação de controles CIS/NIST", "Gestão de identidade e acesso (Azure AD)", "Hardening de infraestrutura"]
  },
  {
    role: "Coordenador de Governança de TI",
    company: "IFSC",
    period: "2018 - 2022",
    details: ["Implantação da LGPD institucional", "Elaboração do Plano de Dados Abertos", "Gestão de comitês técnicos (CGD)"]
  },
  {
    role: "Co-Fundador & CEO",
    company: "Novo Energia",
    period: "2012 - Presente",
    details: ["Projeto premiado pelo Sinapse da Inovação", "Intercâmbio tecnológico na Alemanha", "Desenvolvimento de hardware IoT"]
  }
];
