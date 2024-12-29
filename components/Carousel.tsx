import React from 'react';

export default function Carousel() {
  return (
    <div className="carouselContainer">
      <div className="carouselTrack">
        <img src="/Dylan Hero.jpeg" alt="Image 1" className="carouselImage" />
        <img src="/Dylan Hero.jpeg" alt="Image 2" className="carouselImage" />
        <img src="/Dylan Hero.jpeg" alt="Image 3" className="carouselImage" />
        <img src="/Dylan Hero.jpeg" alt="Image 4" className="carouselImage" />
        {/* Repeat the images to create the infinite effect */}
        <img src="/Dylan Hero.jpeg" alt="Image 1" className="carouselImage" />
        <img src="/Dylan Hero.jpeg" alt="Image 2" className="carouselImage" />
        <img src="/Dylan Hero.jpeg" alt="Image 3" className="carouselImage" />
        <img src="/Dylan Hero.jpeg" alt="Image 4" className="carouselImage" />
      </div>
    </div>
  );
}