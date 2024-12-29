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
import { projects, Project } from "@/components/Projects.tsx"; // Import the projects array and Project type

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: any) => {
    setModalContent(project);
    setIsModalOpen(true);
  }

  const handleMailClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
          <Carousel projects={projects} onProjectClick={handleProjectClick} />

        <div className="about" id="about" style={styles.webmasterContactMain}>
          <AboutMeContainer />
          <Tools />
        </div>

      </div>
    </main>

    <footer style={styles.footer}>
      <Socials onMailClick={() => setIsModalOpen(true)} />
    </footer>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} modalContent={modalContent}>
        <Contact />
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
  webmasterContactMain: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid red",
    borderRadius: "1rem",
  },
};
