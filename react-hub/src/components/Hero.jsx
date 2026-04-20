import React from 'react';
import { Code, Briefcase, ExternalLink } from 'lucide-react';
import { HERO_CONTENT } from '../data/hubContent';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={`${styles.hero} animate-fade-in`}>
      <img 
        src={HERO_CONTENT.avatarUrl} 
        alt={`${HERO_CONTENT.name} Avatar`} 
        className={styles.avatar} 
        loading="lazy"
      />
      <h1 className={styles.title}>
        Hello. I'm <span className="text-gradient-accent">{HERO_CONTENT.name}</span>.
      </h1>
      <p className={styles.subtitle}>
        {HERO_CONTENT.tagline}
      </p>
      
      <div className={styles.actions}>
        {HERO_CONTENT.socialLinks.map((link, index) => {
          const Icon = link.label === 'LinkedIn' ? Briefcase : 
                       link.label === 'GitHub' ? Code : ExternalLink;
          
          return (
            <a 
              key={index}
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={link.type === 'primary' ? styles.btnPrimary : styles.btnSecondary}
            >
              <Icon size={20} />
              {link.label}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
