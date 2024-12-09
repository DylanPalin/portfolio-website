import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Project = {
  title: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    title: 'PhotoLabs',
    description: 'A full-stack photo editing web application allowing users to upload, edit, and share images.',
    image: '/Final Version Front-end.png',
  },
  {
    title: 'PetConnect',
    description: 'A platform connecting pet owners with local services like groomers, walkers, and vets.',
    image: '/PetConnect.png',
  },
  {
    title: 'SnackSesh',
    description: 'A real-time food deals app enabling users to find and share local snack and meal deals.',
    image: '/Final Version Front-end.png',
  },
];

  type CustomModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
  };
  
  function CustomModal({ isOpen, onClose, title, description }: CustomModalProps) {
  if (!isOpen) return null;

  return (
    <div style={overlayStyles as React.CSSProperties}>
      <div style={modalStyles as React.CSSProperties}>
        <button onClick={onClose} style={closeButtonStyles as React.CSSProperties}>X</button>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', maxWidth: '100%', margin: 'auto' }}>
      {projects.map((project, index) => (
        <AnimatePresence key={project.title}>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            style={{ cursor: 'pointer', textAlign: 'center', width: '200px' }}
            onClick={() => openModal(index)}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', height: 'auto', maxHeight: '150px', objectFit: 'cover' }}
            />
            <h3>{project.title}</h3>
          </motion.div>
        </AnimatePresence>
      ))}

      {selectedIndex !== null && (
        <CustomModal
          isOpen={true}
          onClose={closeModal}
          title={projects[selectedIndex].title}
          description={projects[selectedIndex].description}
        />
      )}
    </div>
  );
}

const overlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalStyles = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '5px',
  width: '300px',
  position: 'relative',
  textAlign: 'center' as const,
};

const closeButtonStyles = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  fontSize: '1.5rem',
};