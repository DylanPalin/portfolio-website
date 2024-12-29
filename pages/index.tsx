import Head from "next/head";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";
import Socials from "@/components/Socials";
import Contact from "@/components/Contact";
import Carousel from "@/components/Carousel";
import Billboard from "@/components/Billboard";
import { } from "motion/react-client";

export default function Home() {
  return (
    <>
      <Head>
        <title>PAY</title>
        <meta name="description" content="Portfolio of Dylan Palin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={styles.main}>
        <Navbar />

        <div className="mainContainer" style={styles.mainContainer}>
        <Billboard />

        <Section id="about" title="">
          <div style={styles.aboutContainer}>
            <img src="/Dylan Hero.jpeg" alt="Hero" style={styles.aboutImage} />
            <div style={styles.aboutSection}>
              <p className="greeting" style={styles.greeting}>Hi, I&apos;m Dylan.</p><br/>
              <p>I&apos;m a web developer with a passion for crafting modern, intuitive, and user-centric web applications. With a strong foundation in front-end and full-stack development, I thrive on turning creative ideas into seamless digital experiences.</p>
            </div>
          </div>
        </Section>

        <Section id="carousel" title="Carousel">
          <Carousel />
        </Section>

        <Section id="tools" title="Tools">
          <Tools />
        </Section>

        <Section id="projects" title="Projects">
          <Projects />
        </Section>

        <Section id="contact" title="Contact">
          <Contact />
        </Section>

        </div>
      </main>

      <footer style={styles.footer}>
        <Socials />
      </footer>
    </>
  );
}

const styles = {
  main: {
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
  },
  footer: {
    position: "fixed" as const,
    bottom: "2rem", // Adjust the top position as needed
    left: "0",
    width: "3rem", // Adjust the width for your needs
    backgroundColor: "white",
    padding: "0.1rem 0",
    textAlign: "center" as const,
    fontSize: "2rem",
  },
  aboutSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "80%",
  },
  aboutContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    backgroundColor: "#333",
    borderRadius: "1rem",
    maxWidth: "24rem",
  },
  greeting: { 
    fontSize: "2rem", 
    color: "#fff",
    fontFamily: 'playfair-display',
    marginTop: '1rem',
    marginBottom: '-1.3rem',
  },
  aboutImage: {
    width: "40%",
    height: "auto",
    borderRadius: "50%",
    marginTop: "1rem",
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    paddingLeft: '2rem',
    paddingRight: '2rem',
  },
};
