import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav style={styles.navbar}>
      <span style={styles.logo}>P A Y</span>
      <a href="#about" style={styles.navItem}>About</a>
      <a href="#tools" style={styles.navItem}>Tools</a>
      <a href="#projects" style={styles.navItem}>Projects</a>
      <a href="#contact" style={styles.navItem}>Contact</a>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '.4rem',
    backgroundColor: '#333',
    color: '#fff',
    position: 'sticky' as const,
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginLeft: '1.2rem',
    marginRight: '.1rem',
  },
  navItem: {
    marginLeft: '1.6rem',
    color: 'lighter-grey',
    textDecoration: 'none',
  },
};

export default Navbar;
