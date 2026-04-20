import React from 'react';
import { ExternalLink, Play, Award, Microscope, Globe } from 'lucide-react';
import { 
  APP_PROJECTS, 
  INFRA_PROJECTS, 
  VIDEO_HIGHLIGHTS, 
  PUBLICATIONS,
  SKILLS,
  PHOTOGRAPHY_SAMPLES
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
  >
    <div className={styles.cardHeader}>
      <div className={styles.iconWrapper}>{item.icon}</div>
      {item.badge && <span className={styles.badge}>{item.badge}</span>}
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
  >
    <div className={styles.thumbWrapper}>
      <img src={video.thumbnail} alt={video.title} loading="lazy" />
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
      
      {/* SEÇÃO COMPETÊNCIAS */}
      <div className={styles.header}>
        <h2 className={styles.title}>Core <span className="text-gradient">Competencies</span></h2>
        <p className={styles.subtitle}>Especialista em Cloud Native, Governança e Segurança.</p>
      </div>

      <div className={styles.skillsGrid}>
        {SKILLS.categories.map((cat, i) => (
          <div key={i} className={`glass-panel ${styles.skillCategory}`}>
            <h4>{cat.name}</h4>
            <div className={styles.skillList}>
              {cat.items.map((skill, j) => (
                <span key={j} className={styles.skillTag}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* SEÇÃO INFRA E PATENTES */}
      <div className={styles.header} style={{ marginTop: '5rem' }}>
        <h2 className={styles.title}>Projetos & <span className="text-gradient">Inovações</span></h2>
        <p className={styles.subtitle}>Patentes, infraestrutura e arquitetura de nuvem.</p>
      </div>
      
      <div className={styles.infraGrid}>
        {INFRA_PROJECTS.map((item, index) => (
          <InfraCard key={index} item={item} />
        ))}
      </div>

      {/* SEÇÃO APPS (BENTO) */}
      <div className={styles.header} style={{ marginTop: '5rem' }}>
        <h2 className={styles.title}>Apps & <span className="text-gradient-accent">Ecossistema</span></h2>
        <p className={styles.subtitle}>Ferramentas modulares construídas para escala.</p>
      </div>
      
      <div className={styles.grid}>
        {APP_PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* SEÇÃO FOTOGRAFIA 500PX (ROLLING) */}
      <div className={styles.header} style={{ marginTop: '5rem' }}>
        <h2 className={styles.title}>Visual <span className="text-gradient">Art</span></h2>
        <p className={styles.subtitle}>Portfólio de fotografia em 500px.</p>
      </div>

      <div className={styles.photoMarquee}>
        <div className={styles.marqueeInner}>
          {[...PHOTOGRAPHY_SAMPLES, ...PHOTOGRAPHY_SAMPLES].map((photo, i) => (
            <a key={i} href={photo.link} target="_blank" rel="noopener noreferrer" className={styles.photoThumb}>
              <img src={photo.url} alt="500px sample" loading="lazy" />
            </a>
          ))}
        </div>
      </div>

      {/* SEÇÃO VÍDEOS */}
      <div className={styles.header} style={{ marginTop: '5rem' }}>
        <h2 className={styles.title}>Mídia & <span className="text-gradient">Pitches</span></h2>
        <p className={styles.subtitle}>Apresentações técnicas e entrevistas.</p>
      </div>

      <div className={styles.videoGrid}>
        {VIDEO_HIGHLIGHTS.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </div>

      {/* SEÇÃO IFRAME FARLEIR.DEV */}
      <div className={styles.header} style={{ marginTop: '5rem' }}>
        <h2 className={styles.title}>Timeline <span className="text-gradient">Interactive</span></h2>
        <p className={styles.subtitle}>Explore o ecossistema detalhado em farleir.dev.</p>
      </div>

      <div className={`glass-panel ${styles.iframeContainer}`}>
        <iframe 
          src="https://farleir.dev" 
          title="Farleir Dev Timeline"
          loading="lazy"
          className={styles.iframe}
        ></iframe>
        <div className={styles.iframeOverlay}>
          <a href="https://go.farleir.com/dev" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
            <Globe size={18} /> Ver site completo
          </a>
        </div>
      </div>

      {/* SEÇÃO ARTIGOS */}
      <div className={styles.header} style={{ marginTop: '5rem' }}>
        <h2 className={styles.title}>Escrita & <span className="text-gradient">Academia</span></h2>
        <p className={styles.subtitle}>Publicações técnicas e artigos de pesquisa.</p>
      </div>

      <div className={styles.infraGrid}>
        {PUBLICATIONS.map((pub, index) => (
          <a 
            key={index} 
            href={pub.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`glass-panel ${styles.infraCard}`}
          >
            <h3>{pub.title}</h3>
            <p>{pub.description}</p>
            <div style={{ marginTop: 'auto', paddingTop: '1rem', color: 'var(--text-secondary)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Documento Oficial <ExternalLink size={14} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default BentoGrid;
