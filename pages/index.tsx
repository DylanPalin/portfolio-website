import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import Projects from '@/components/Projects';
import Tools from '@/components/Tools';
import Socials from '@/components/Socials';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dylan Palin</title>
        <meta name="description" content="Portfolio of Dylan Palin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main style={styles.main}>
        <Section id="about" title="About Me">
          <p>Hello! I&apos;m Dylan Palin, a web developer passionate about creating modern and user-friendly web applications.</p>
        </Section>

        <Tools />

        <Section id="projects" title="Projects">
          <Projects />
        </Section>

        <Section id="contact" title="Contact">
          <Contact />
        </Section>

      </main>

      <footer style={styles.footer}>
        <Socials />
      </footer>
    </>
  );
}

const styles = {
  main: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    padding: '0 2rem',
  },
  footer: {
    position: 'fixed',
    bottom: '2rem', // Adjust the top position as needed
    left: '0',
    width: '3rem', // Adjust the width for your needs
    backgroundColor: 'white',
    padding: '0.01rem 0',
    textAlign: 'center',
    fontSize: '2rem',
  },
};
