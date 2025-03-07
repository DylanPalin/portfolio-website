import React from 'react';
import PagesbyPay from './PagesbyPay';

const Billboard: React.FC = () => {
  const styles = {
    billboard: {
      position: 'relative' as const,
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '12rem',
      width: '100%',
      overflow: 'hidden',
      borderRadius: '1rem',
      marginTop: '1rem',
      color: '#fff', // Ensure text color is visible over the video
      boxShadow: '0 0 1rem 1 rgba(0, 0, 0, 0.2)', // Add shadow
    },
    video: {
      position: 'absolute' as const,
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover' as const,
      zIndex: 0,
      filter: 'blur(8px)', // Apply blur effect
    },
    content: {
      position: 'relative' as const,
      zIndex: 1,
    },
    headerText: {
      fontSize: '2rem',
      fontWeight: '1',
      letterSpacing: '0.2rem', // Adjust the letter spacing as needed
      textAlign: 'center' as const,
      fontFamily: 'Helvetica, Arial, sans-serif',
    },
  };

  return (
    <div style={styles.billboard}>
      <video autoPlay loop muted style={styles.video}>
        <source src="/Hands Typing Laptop Social Media.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={styles.content}>
        <h1 className="HeaderText" style={styles.headerText}>Need a new site?</h1>
        <PagesbyPay />
      </div>
    </div>
  );
};


export default Billboard;