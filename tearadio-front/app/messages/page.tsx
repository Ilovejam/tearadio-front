"use client";
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
interface ImageDisplayProps {
  src: string;
  alt: string;
}
const Messages: React.FC = () => {
  const [showImages, setShowImages] = useState(true);

  const handleClear = () => {
    setShowImages(false);
  };

  return (
    <div className="bg-white">
      <Navbar />
      <div className="flex flex-col items-center px-4 py-2 mt-20">
        {showImages ? (
          <>
            <ImageDisplay src="/notification1.png" alt="First Notification" />
            <ImageDisplay src="/notification2.png" alt="Second Notification" />
            <ImageDisplay src="/notification3.png" alt="Third Notification" />
          </>
        ) : (
          <div className="text-center mt-4">Nothing to show</div>
        )}

        <button 
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

const ImageDisplay: React.FC<ImageDisplayProps> = ({ src, alt }) => (
  <div className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
    <Image
      src={src}
      alt={alt}
      width={500}
      height={300}
      layout="responsive"
      objectFit="contain"
    />
  </div>
);




export default Messages;
