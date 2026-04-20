import React from 'react';
import { Briefcase, GraduationCap, ChevronRight, CheckCircle2 } from 'lucide-react';
import styles from './Career.module.css';

const timeline = [
  {
    role: "Analista de Tecnologia da Informação",
    company: "Instituto Federal de Santa Catarina (IFSC)",
    period: "Em Ocupação",
    description: "Atuação no desenvolvimento e manutenção de sistemas corporativos públicos locais, liderança e engenharia de software na direção geral da instituição.",
    icon: <Briefcase size={20} />
  },
  {
    role: "Programador Independente & Maker",
    company: "Farleir.app / HTML.Zone",
    period: "Presente",
    description: "Construção de ecossistemas digitais, ferramentas (SaaS), aplicativos encurtadores e automação de IAs (Sink, Pick2.me).",
    icon: <CheckCircle2 size={20} />
  },
  {
    role: "Formação Técnica & Especializações",
    company: "Universidades e Instituições de Inovação",
    period: "Acessar via Lattes",
    description: "Múltiplas especializações com foco em Tecnologia da Informação, Inovação do Setor Público, Desenvolvimento de Software e Metodologias Ágeis.",
    icon: <GraduationCap size={20} />
  }
];

const Career = () => {
  return (
    <section className={`${styles.container} animate-fade-in delay-200`}>
      <div className={styles.header}>
        <h2 className={styles.title}>Carreira & <span className="text-gradient">Timeline</span></h2>
        <p className={styles.subtitle}>Uma visão geral do meu background técnico.</p>
      </div>

      <div className={styles.timeline}>
        {timeline.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.line}></div>
            <div className={styles.marker}>
              <div className={styles.icon}>{item.icon}</div>
            </div>
            <div className={`glass-panel ${styles.content}`}>
              <span className={styles.period}>{item.period}</span>
              <h3 className={styles.role}>{item.role}</h3>
              <p className={styles.company}>{item.company}</p>
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Career;
