import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

interface Project {
  title: string;
  description: string;
  image: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div style={styles.overlay} onClick={handleOverlayClick}>
      <div style={styles.modal}>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <img src={project.image} alt={project.title} style={styles.image} />
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
};

import { CSSProperties } from 'react';

const styles: { [key: string]: CSSProperties } = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#eee',
    padding: '2rem',
    borderRadius: '8px',
    maxWidth: '500px',
    width: '100%',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
  },
};

export default Modal;