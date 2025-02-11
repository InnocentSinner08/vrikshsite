"use client";
import { useState, useEffect, useRef } from "react";

interface ImageData {
  id: number;
  src: string;
  date: string;
  title: string;
  content: string;
}

// Sample Data
const initialImages: ImageData[] = [
  { id: 1, src: "/images/homepage/slider1.jpg", date: "2024-02-01", title: "Recent Event", content: "Nature is a powerful force that shapes the world we live in. From towering mountains to vast oceans, it provides us with everything we need to survive and thrive." },
  { id: 2, src: "/images/homepage/slider2.JPG", date: "2024-01-28", title: "Charity Drive", content: "The intricate balance of ecosystems ensures that each species, big or small, has a vital role to play in our world." },
  { id: 3, src: "/images/homepage/slider3.JPG", date: "2024-01-20", title: "Tree Plantation", content: "Whether it's the sound of leaves rustling in the wind or the sight of a roaring waterfall, nature's beauty is boundless." },
  { id: 4, src: "/images/homepage/slider4.JPG", date: "2024-01-15", title: "Food Distribution", content: "From towering mountains to vast oceans, nature provides us with everything we need to survive and thrive." },
];

const TimelineGallery = () => {
  const [images, setImages] = useState<ImageData[]>(initialImages);
  const observerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4">
      {/* Header with Logo and Name */}
      <header className="flex flex-col items-center justify-center py-4">
        <img src="/images/homepage/vriksh-logo.png" alt="Vriksh Logo" className="w-20 h-20" />
        <h1 className="text-xl font-semibold text-gray-900 mt-2">Vriksh Music Class</h1>
      </header>

      {/* Image Grid */}
      <div ref={observerRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
        {images.map((image) => (
          <div key={image.id} className="relative w-full h-60 group overflow-hidden rounded-lg shadow-md">
            {/* Image */}
            <img src={image.src} alt={image.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4 transition-opacity duration-300">
              <span className="text-sm text-gray-300">{image.date}</span>
              <h2 className="text-lg font-semibold text-white">{image.title}</h2>
              {/* <p className="text-xs text-gray-300 mt-1">{image.content}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineGallery;
