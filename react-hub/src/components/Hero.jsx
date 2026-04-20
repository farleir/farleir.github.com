import React from 'react';
import { Code, Briefcase, ExternalLink } from 'lucide-react';
import { HERO_CONTENT } from '../data/hubContent';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={`${styles.hero} animate-fade-in`}>
      <div className={styles.avatarWrapper}>
        <img 
          src={HERO_CONTENT.avatarUrl} 
          alt={`${HERO_CONTENT.name} Avatar`} 
          className={styles.avatar} 
          loading="lazy"
          onError={(e) => { e.target.src = 'https://avatars.githubusercontent.com/u/492476?v=4' }}
        />
      </div>
      <h1 className={styles.title}>
        <span className="text-gradient">{HERO_CONTENT.name}</span>
      </h1>
      <p className={styles.tagline}>
        {HERO_CONTENT.tagline}
      </p>
      
      <div className={styles.summaryContainer}>
        <p className={styles.summary}>
          {HERO_CONTENT.summary}
        </p>
      </div>
      
      <div className={styles.actions}>
        {HERO_CONTENT.socialLinks.map((link, index) => (
          <a 
            key={index}
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={link.type === 'primary' ? styles.btnPrimary : styles.btnSecondary}
            aria-label={link.label}
          >
            {link.icon}
            <span className={styles.btnText}>{link.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero;
