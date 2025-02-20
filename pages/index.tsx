import React, { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Tools from "@/components/Tools";
import Socials from "@/components/Socials";
import Contact from "@/components/Contact";
import Carousel from "@/components/Carousel";
import Billboard from "@/components/Billboard";
import AboutMeContainer from "@/components/AboutMeContainer";
import Modal from "@/components/Modal";
import { projects } from "@/components/Projects";
import type { Project } from "@/components/Projects"; 

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const handleProjectClick = (project: Project) => {
    setModalContent(
      <div>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <img src={project.image} alt={project.title} style={styles.image} />
      </div>
    );
    setIsModalOpen(true);
  };

  const handleMailClick = () => {
    setModalContent(<Contact />);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

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
          <div className="textBorder">
            <Tools />
          </div>
          <Carousel projects={projects} onProjectClick={handleProjectClick} />
          <AboutMeContainer />
        </div>
      </main>

      <footer style={styles.footer}>
        <Socials onMailClick={handleMailClick} />
      </footer>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {modalContent}
      </Modal>
    </>
  );
}

import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
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
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
  image: {
    width: '100%',
    borderRadius: '8px',
  },
};