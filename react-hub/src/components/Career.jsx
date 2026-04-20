import React from 'react';
import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';
import { CAREER_TIMELINE } from '../data/hubContent';
import styles from './Career.module.css';

const Career = () => {
  return (
    <section className={`${styles.container} animate-fade-in delay-200`}>
      <div className={styles.header}>
        <h2 className={styles.title}>Histórico <span className="text-gradient">Profissional</span></h2>
        <p className={styles.subtitle}>Experiência consolidada em TI, Inovação e Governança.</p>
      </div>

      <div className={styles.timeline}>
        {CAREER_TIMELINE.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.line}></div>
            <div className={styles.marker}>
              <div className={styles.icon}>
                {item.company === 'IFSC' ? <Briefcase size={20} /> : <CheckCircle2 size={20} />}
              </div>
            </div>
            <div className={`glass-panel ${styles.content}`}>
              <div className={styles.contentHeader}>
                <span className={styles.period}>
                  <Calendar size={14} style={{ marginRight: '4px' }} />
                  {item.period}
                </span>
                <span className={styles.companyName}>{item.company}</span>
              </div>
              <h3 className={styles.role}>{item.role}</h3>
              <ul className={styles.detailsList}>
                {item.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* EDUCAÇÃO COMPLEMENTAR */}
      <div className={styles.educationSection}>
        <div className={styles.educationCard}>
          <GraduationCap size={24} className="text-gradient" />
          <div>
            <h4>Mestre em Mecatrônica</h4>
            <p>IFSC - Foco em Robótica e Automação (Patente Depositada)</p>
          </div>
        </div>
        <div className={styles.educationCard}>
          <GraduationCap size={24} className="text-gradient" />
          <div>
            <h4>Especialista em Prod. Eletrônicos</h4>
            <p>Intercâmbio na Alemanha (HSNB) & Sinapse da Inovação</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
