import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav style={styles.navbar}>
      <a href="#about">About Me</a>
      <a href="#projects">Projects</a>
      <a href="#frameworks">Frameworks & Languages</a>
      <a href="#socials">Links & Socials</a>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '1rem',
    backgroundColor: '#333',
    color: '#fff',
    position: 'sticky' as 'sticky',
    top: 0,
    zIndex: 1000,
  },
};

export default Navbar;
