import React, { useState } from 'react';

const images = [
  require('../../assets/images/Gallery/Butterfly.jpg'),
  require('../../assets/images/Gallery/earrings.jpg'),
  require('../../assets/images/Gallery/Necklace.jpg')
];

function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery">
      <button onClick={prevSlide}>‹</button>
      <img src={images[currentIndex]} alt="Earrings" />
      <button onClick={nextSlide}>›</button>
    </div>
  );
}

export default ImageGallery;
