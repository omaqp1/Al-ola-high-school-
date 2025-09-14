import React from 'react';
import styles from './Hero.module.css';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
  height?: 'small' | 'medium' | 'large';
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  backgroundImage,
  children,
  height = 'medium'
}) => {
  return (
    <section 
      className={`${styles.hero} ${styles[height]}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.content}>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            <h1 className={styles.title}>{title}</h1>
            {description && <p className={styles.description}>{description}</p>}
            {children && <div className={styles.actions}>{children}</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;