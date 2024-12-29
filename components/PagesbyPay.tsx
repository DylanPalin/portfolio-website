export default function PagesbyPay() {
  const styles = {
    pbpContainer: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      borderRadius: '1rem',
      color: '#fff',
    },
    title1: {
      fontSize: '4rem',
      color: '#fff',
      margin: '0',
      padding: '0',
      marginTop: '-1.8rem',
      marginLeft: '1rem',
      marginBottom: '-2.4rem',
      fontFamily: 'playfair-display',
    },
    title2: {
      fontSize: '1.3rem',
      color: '#fff',
      marginBottom: '1rem',
      marginTop: '1rem',
    },
    title3: {
      fontSize: '1.8rem',
      color: '#fff',
      margin: '0',
      padding: '0',
      marginTop: '-1.8rem',
      marginBottom: '-1.5rem',
      letterSpacing: '-.1rem',
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#ccc',
    },
    ctaButton: {
      padding: '0.5rem 1.3rem',
      margin: '.3rem',
      fontSize: '1rem',
      color: '#000',
      backgroundColor: '#fff',
      border: 'none',
      borderRadius: '0.25rem',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.pbpContainer}>
      <h1 style={styles.title1}>pages.</h1>
      <h2 style={styles.title2}>by</h2>
      <h1 style={styles.title3}>P A Y</h1>
      <div>
        <p><button style={styles.ctaButton}>Explore</button></p>
      </div>
    </div>
  );
}
