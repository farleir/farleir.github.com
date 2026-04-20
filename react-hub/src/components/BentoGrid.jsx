import React from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { 
  APP_PROJECTS, 
  INFRA_PROJECTS, 
  VIDEO_HIGHLIGHTS, 
  PUBLICATIONS 
} from '../data/hubContent';
import styles from './BentoGrid.module.css';

const ProjectCard = ({ project }) => (
  <a 
    href={project.link} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`glass-panel ${styles.card} ${styles[project.size]}`}
    aria-label={`Abrir ${project.title}`}
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
);

const InfraCard = ({ item }) => (
  <a 
    href={item.link} 
    target="_blank" 
    rel="noopener noreferrer" 
    className={`glass-panel ${styles.infraCard}`}
    aria-label={`Ver detalhes de ${item.title}`}
  >
    <div className={styles.cardHeader}>
      <div className={styles.iconWrapper}>{item.icon}</div>
      <ExternalLink size={16} className={styles.linkIcon} />
    </div>
    <h3>{item.title}</h3>
    <p>{item.description}</p>
  </a>
);

const VideoCard = ({ video }) => (
  <a 
    href={video.link} 
    target="_blank" 
    rel="noopener noreferrer" 
    className={styles.videoCard}
    aria-label={`Assistir vídeo: ${video.title}`}
  >
    <div className={styles.thumbWrapper}>
      <img 
        src={video.thumbnail} 
        alt={`Thumbnail do vídeo ${video.title}`} 
        loading="lazy" 
      />
      <div className={styles.playOverlay}>
        <Play size={32} fill="white" />
      </div>
    </div>
    <h4>{video.title}</h4>
  </a>
);

const BentoGrid = () => {
  return (
    <section className={`${styles.container} animate-fade-in delay-100`}>
      {/* SEÇÃO INFRA E CLOUD */}
      <div className={styles.header}>
        <h2 className={styles.title}>Infraestrutura & <span className="text-gradient">Cloud</span></h2>
        <p className={styles.subtitle}>Especialidade em AWS, Governança de TI e LGPD.</p>
      </div>
      
      <div className={styles.infraGrid}>
        {INFRA_PROJECTS.map((item, index) => (
          <InfraCard key={index} item={item} />
        ))}
      </div>

      {/* SEÇÃO APPS */}
      <div className={styles.header} style={{ marginTop: '5rem' }}>
        <h2 className={styles.title}>Apps & <span className="text-gradient-accent">Ecossistema</span></h2>
        <p className={styles.subtitle}>Ferramentas e utilitários desenvolvidos para produtividade.</p>
      </div>
      
      <div className={styles.grid}>
        {APP_PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* SEÇÃO VÍDEOS */}
      <div className={styles.header} style={{ marginTop: '5rem' }}>
        <h2 className={styles.title}>Mídia & <span className="text-gradient">Destaques</span></h2>
        <p className={styles.subtitle}>Entrevistas, pitches e apresentações técnicas.</p>
      </div>

      <div className={styles.videoGrid}>
        {VIDEO_HIGHLIGHTS.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </div>

      {/* SEÇÃO ARTIGOS */}
      <div className={styles.header} style={{ marginTop: '5rem' }}>
        <h2 className={styles.title}>Artigos & <span className="text-gradient">Publicações</span></h2>
        <p className={styles.subtitle}>Pensamento analítico sobre tecnologia e sociedade.</p>
      </div>

      <div className={styles.infraGrid}>
        {PUBLICATIONS.map((pub, index) => (
          <a 
            key={index} 
            href={pub.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`glass-panel ${styles.infraCard}`}
            aria-label={`Ler artigo: ${pub.title}`}
          >
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
