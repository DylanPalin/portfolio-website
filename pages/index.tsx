import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Section from '@/components/Section';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Portfolio of [Your Name]" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main style={styles.main}>
        <Section id="about" title="About Me">
          <p>Hello! I&apos;m [Your Name], a web developer passionate about creating modern and user-friendly web applications.</p>
        </Section>
        <Section id="frameworks" title="Frameworks & Languages">
          <p>My most used frameworks and languages include:</p>
          <ul>
            <li>JavaScript/TypeScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Node.js</li>
          </ul>
        </Section>
        <Section id="projects" title="Projects">
          <ul>
            <li>Project 1: Description</li>
            <li>Project 2: Description</li>
            <li>Project 3: Description</li>
          </ul>
        </Section>
        <Section id="socials" title="Links & Socials">
          <ul>
            <li><a href="https://github.com/yourprofile">GitHub</a></li>
            <li><a href="https://linkedin.com/in/yourprofile">LinkedIn</a></li>
            <li><a href="https://twitter.com/yourhandle">Twitter</a></li>
          </ul>
        </Section>
      </main>
    </>
  );
}

const styles = {
  main: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    padding: '0 2rem',
  },
};
