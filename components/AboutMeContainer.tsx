import Image from "next/image";

export default function AboutMeContainer() {
  const styles = {
    aboutContainer: {
      display: "flex",
      flexDirection: "column" as 'row' | 'row-reverse' | 'column' | 'column-reverse',
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem",
      margin: "1rem",
      backgroundColor: "#333",
      borderRadius: "1rem",
      maxWidth: "30%",
    },
    aboutSection: {
      display: "flex",
      flexDirection: "column" as 'row' | 'row-reverse' | 'column' | 'column-reverse',
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial, sans-serif",
      marginBottom: "-1rem",
    },
    title: {
      lineHeight: "1.5rem",
      fontSize: "1.5rem",
      color: "#fff",
      fontFamily: "times-new-roman",
      marginBottom: "-1.5rem",
    },
    aboutImage: {
      width: '100%',
      height: 'auto',
      objectFit: 'cover' as const, // Ensures the image covers the container
      borderRadius: '1rem',
    },
  };

  return (
    <>
      <div style={styles.aboutContainer}>
        <Image
          src="/Personal Photo LinkedIn Banner.png"
          alt="Hero"
          style={styles.aboutImage}
          width={500}
          height={500}
        />
        <div style={styles.aboutSection}>
          <p className="title" style={styles.title}>
            WEBMASTER
          </p>
          <br />
          <p>
            Web developer, music producer, and game content creator with a strong
            foundation in front-end and full-stack development. I thrive on
            turning creative ideas into seamless digital experiences.
          </p>
        </div>
      </div>
    </>
  );
}
