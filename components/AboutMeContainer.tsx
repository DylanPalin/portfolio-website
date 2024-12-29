import Image from "next/image";

export default function AboutMeContainer() {
  const styles = {
    aboutContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem",
      backgroundColor: "#333",
      borderRadius: "1rem",
      maxWidth: "33%",
    },
    aboutSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      fontFamily: "Arial, sans-serif",
    },
    greeting: {
      fontSize: "1.5rem",
      color: "#fff",
      fontFamily: "times-new-roman",
      marginTop: "1rem",
      marginBottom: "-1.3rem",
    },
    aboutImage: {
      maxWidth: "33%",
      height: "auto",
      marginTop: "1rem",
    },
  };

  return (
    <>
      <div style={styles.aboutContainer}>
        <Image
          src="/Dylan Left Transparent.png"
          alt="Hero"
          style={styles.aboutImage}
          width={200}
          height={200}
        />
        <div style={styles.aboutSection}>
          <p className="greeting" style={styles.greeting}>
            WEBMASTER
          </p>
          <br />
          <p>
            My name is Dylan Palin, and I&apos;m a web developer, music producer, and game content creator. With a strong
            foundation in front-end and full-stack development, I thrive on
            turning creative ideas into seamless digital experiences.
          </p>
        </div>
      </div>
    </>
  );
}
