import React, { useEffect, useState } from 'react';
import "./App.css";

const images = [
  {
    url: "https://c4.wallpaperflare.com/wallpaper/687/898/540/chicken-board-parsley-white-background-wallpaper-preview.jpg",
    alt: 'Paan Slide 1',
  },
  {
    url: "https://images.fineartamerica.com/images-medium-large-5/eggs-bread-and-milk-von-mcknelly.jpg",
    alt: 'Paan Slide 2',
  }
];

export default function PaanCorner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="paan-corner-container">
      <img
        src={images[currentIndex].url}
        alt={images[currentIndex].alt}
        className="slider-image"
      />
    </div>
  );
}