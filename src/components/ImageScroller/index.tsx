'use client'

import Image, { StaticImageData } from "next/image";
import React, { useState, useRef, MouseEvent } from "react";

interface ImageScrollerProps {
  images: string[];
}

const ImageScroller: React.FC<ImageScrollerProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const dragStartPos = useRef<number>(0);
  const dragging = useRef<boolean>(false);

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    dragging.current = true;
    dragStartPos.current = event.clientX;
    event.preventDefault();
  };

  const handleMouseUp = () => {
    dragging.current = false;
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (dragging.current) {
      const diff = event.clientX - dragStartPos.current;
      const moveThreshold = Math.floor(window.innerWidth / (images.length / 4));
      const indexChange = Math.floor(diff / moveThreshold);
      const newIndex =
        (currentIndex + indexChange + images.length) % images.length;

      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    }
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{
        cursor: "grab",
        userSelect: "none",
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
        <p>hola</p>
        <img
            src={images[currentIndex]}
            alt={`Display ${currentIndex}`}
            style={{ width: "100%", height: "auto", userDrag: "none" }}
      />
    </div>
  );
};

export default ImageScroller;
