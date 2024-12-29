import React, { useEffect, useRef } from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
}

interface CarouselProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export default function Carousel({ projects, onProjectClick }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (trackRef.current) {
        const scrollPosition = window.scrollY;
        trackRef.current.style.transform = `translateX(-${scrollPosition}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="carouselContainer">
      <div className="carouselTrack" ref={trackRef}>
        {projects.map((project, index) => (
          <img
            key={index}
            src={project.image}
            alt={project.title}
            className="carouselImage"
            onClick={() => onProjectClick(project)}
          />
        ))}
      </div>
    </div>
  );
}