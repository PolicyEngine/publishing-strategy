import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'current', label: 'Current State' },
  { id: 'vision', label: 'The Vision' },
  { id: 'interactive', label: 'Interactive-Driven' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'rhythm', label: 'Weekly Rhythm' },
  { id: 'content', label: 'Content Types' },
  { id: 'pipeline', label: 'Idea Pipeline' },
  { id: 'delivery', label: 'Delivery' },
  { id: 'next', label: 'Next Steps' },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-50% 0px', threshold: 0 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={styles.nav}>
      {sections.map(({ id, label }) => (
        <button
          key={id}
          className={`${styles.navDot} ${activeSection === id ? styles.active : ''}`}
          onClick={() => scrollToSection(id)}
          data-label={label}
          aria-label={label}
        />
      ))}
    </nav>
  );
}
