import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} style={styles.section}>
      <h2 style={styles.title}>{title}</h2>
      {children}
    </section>
  );
};

const styles = {
  section: {
    padding: '2rem',
    margin: '2rem 0',
    borderBottom: '1px solid #ddd',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
};

export default Section;
