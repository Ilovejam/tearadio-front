'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';

const Notifications = () => {
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
            <div className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              <Image
                src="https://i.ibb.co/hBW4YVM/Notification.png"
                alt="First Notification"
                width={500}
                height={300}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              <Image
                src="https://i.ibb.co/x26TjS5/Notification-1.png"
                alt="Second Notification"
                width={500}
                height={300}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              <Image
                src="https://i.ibb.co/zQsnfyL/Notification-2.png"
                alt="Third Notification"
                width={500}
                height={300}
                layout="responsive"
                objectFit="contain"
              />
            </div>
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

export default Notifications;
