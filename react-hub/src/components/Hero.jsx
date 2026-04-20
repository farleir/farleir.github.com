import React from 'react';
import { Code, Briefcase, ExternalLink } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={`${styles.hero} animate-fade-in`}>
      <img 
        src="https://avatars.githubusercontent.com/u/492476?v=4" 
        alt="Farleir Luís Minozzo" 
        className={styles.avatar} 
      />
      <h1 className={styles.title}>
        Hello. I'm <span className="text-gradient-accent">Farleir</span>.
      </h1>
      <p className={styles.subtitle}>
        Expert em Infraestrutura de TI, Cloud Architect e Governança de Dados (LGPD/IA).
      </p>
      
      <div className={styles.actions}>
        <a href="https://go.farleir.com/linkedin" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
          <Briefcase size={20} />
          LinkedIn
        </a>
        <a href="https://go.farleir.com/go-footer-github" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
          <Code size={20} />
          GitHub
        </a>
        <a href="https://go.farleir.com/lattes" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
          <ExternalLink size={20} />
          Lattes
        </a>
      </div>
    </section>
  );
};

export default Hero;
