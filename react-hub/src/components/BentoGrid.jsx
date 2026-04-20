import React from 'react';
import { ExternalLink, Link2, Sparkles, Coffee, LayoutGrid, Shield, Cloud, Play, Lock } from 'lucide-react';
import styles from './BentoGrid.module.css';

const appProjects = [
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
    description: 'Gerador de frases iterativas para bingo corporativo.',
    link: 'https://go.farleir.com/bingo',
    icon: <LayoutGrid size={24} />,
    size: 'small',
  },
  {
    title: 'Analista de Bagé',
    description: 'O grande pensador e filósofo gaúcho encapsulado em um app.',
    link: 'https://go.farleir.com/analista',
    icon: <Coffee size={24} />,
    size: 'small',
  }
];

const infraProjects = [
  {
    title: 'Arquitetura AWS',
    description: 'Badges e certificações AWS Certified Solutions Architect.',
    link: 'https://go.farleir.com/arquitetoaws',
    icon: <Cloud size={24} />,
  },
  {
    title: 'Governança & IA',
    description: 'Orientação técnica sobre uso ético de IA no IFSC.',
    link: 'https://go.farleir.com/ifsc-otia',
    icon: <Shield size={24} />,
  },
  {
    title: 'LGPD & Biometria',
    description: 'Diretrizes sobre proteção de dados e biometria.',
    link: 'https://go.farleir.com/ifsc-biometria',
    icon: <Lock size={24} />,
  }
];

const videoHighlights = [
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

const publicationLinks = [
  {
    title: 'Artigo MCDA',
    description: 'Metodologia de Apoio à Decisão aplicada.',
    link: 'https://go.farleir.com/artigomcda',
  },
  {
    title: 'Artigo Pick2Me',
    description: 'Estudo sobre logística e mobilidade urbana.',
    link: 'https://go.farleir.com/artigopick2me',
  },
  {
    title: 'Governança IA',
    description: 'Framework para uso ético de IA no setor público.',
    link: 'https://go.farleir.com/ifsc-newsia',
  }
];

const BentoGrid = () => {
  return (
    <section className={`${styles.container} animate-fade-in delay-100`}>
      {/* SEÇÃO INFRA E CLOUD */}
      <div className={styles.header}>
        <h2 className={styles.title}>Infraestrutura & <span className="text-gradient">Cloud</span></h2>
        <p className={styles.subtitle}>Especialidade em AWS, Governança de TI e LGPD.</p>
      </div>
      
      <div className={styles.infraGrid}>
        {infraProjects.map((item, index) => (
          <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className={`glass-panel ${styles.infraCard}`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>{item.icon}</div>
              <ExternalLink size={16} className={styles.linkIcon} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </a>
        ))}
      </div>

      {/* SEÇÃO APPS */}
      <div className={styles.header} style={{ marginTop: '5rem' }}>
        <h2 className={styles.title}>Apps & <span className="text-gradient-accent">Ecossistema</span></h2>
        <p className={styles.subtitle}>Ferramentas e utilitários desenvolvidos para produtividade.</p>
      </div>
      
      <div className={styles.grid}>
        {appProjects.map((project, index) => (
          <a 
            key={index}
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`glass-panel ${styles.card} ${styles[project.size]}`}
          >
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>{project.icon}</div>
              <ExternalLink size={18} className={styles.linkIcon} />
            </div>
            <div className={styles.cardContent}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className={styles.glowEffect}></div>
          </a>
        ))}
      </div>

      {/* SEÇÃO VÍDEOS */}
      <div className={styles.header} style={{ marginTop: '5rem' }}>
        <h2 className={styles.title}>Mídia & <span className="text-gradient">Destaques</span></h2>
        <p className={styles.subtitle}>Entrevistas, pitches e apresentações técnicas.</p>
      </div>

      <div className={styles.videoGrid}>
        {videoHighlights.map((video, index) => (
          <a key={index} href={video.link} target="_blank" rel="noopener noreferrer" className={styles.videoCard}>
            <div className={styles.thumbWrapper}>
              <img src={video.thumbnail} alt={video.title} />
              <div className={styles.playOverlay}><Play size={32} fill="white" /></div>
            </div>
            <h4>{video.title}</h4>
          </a>
        ))}
      </div>

      {/* SEÇÃO ARTIGOS */}
      <div className={styles.header} style={{ marginTop: '5rem' }}>
        <h2 className={styles.title}>Artigos & <span className="text-gradient">Publicações</span></h2>
        <p className={styles.subtitle}>Pensamento analítico sobre tecnologia e sociedade.</p>
      </div>

      <div className={styles.infraGrid}>
        {publicationLinks.map((pub, index) => (
          <a key={index} href={pub.link} target="_blank" rel="noopener noreferrer" className={`glass-panel ${styles.infraCard}`}>
            <h3>{pub.title}</h3>
            <p>{pub.description}</p>
            <div style={{ marginTop: 'auto', paddingTop: '1rem', color: 'var(--text-secondary)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Ver documento <ExternalLink size={14} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default BentoGrid;
