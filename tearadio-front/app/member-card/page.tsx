// MemberCard.tsx

"use client";
import React, { useState } from 'react';
import './style.css'; // Bu dosyada kartın stilini belirleyin

interface MemberCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ title, subtitle, imageUrl }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [transformStyle, setTransformStyle] = useState({});

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };
  

  const onMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { top, left, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) / 20;
    const y = (clientY - (top + height / 2)) / 20;

    setTransformStyle({
      transform: `rotateY(${x}deg) rotateX(${y}deg)`,
      transition: 'none',
    });
  };

  const onMouseLeave = () => {
    setTransformStyle({
      transform: 'rotateY(0deg) rotateX(0deg)',
      transition: 'transform 0.5s',
    });
  };

  const cardStyle = isFlipped 
    ? { ...transformStyle, transform: `rotateY(180deg)` } 
    : transformStyle;

  return (
    <div className="perspective">
      <div className="card rounded-lg" 
           style={cardStyle}
           onClick={flipCard} 
           onMouseMove={onMouseMove} 
           onMouseLeave={onMouseLeave}>

        {/* Kartın ön yüzü */}
        <div className="card-face card-front" style={{ height: '70vh' }}>
          <img className="w-full h-full object-cover" src={imageUrl} alt={title} />
          <div className="absolute inset-0 flex flex-col justify-between p-4">
            <div className="text-center">
              <p className="text-white text-lg md:text-2xl font-semibold">{title}</p>
            </div>
            <div className="text-center">
              <p className="text-white text-md md:text-xl">{subtitle}</p>
            </div>
          </div>
        </div>

        {/* Kartın arka yüzü */}
        <div className="card-face card-back flex items-center justify-center relative">
          <div className="absolute inset-0 bg-white bg-opacity-50 blur-sm"></div>
            <img className="w-full h-full object-cover" src={imageUrl} alt="Profile" />
            <img className="w-24 h-24 absolute" src='https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg' alt="QR Code" />
            <div className="absolute bottom-0 w-full text-center  bg-white">
                <div className="flex items-center justify-between  bg-white border-2 border-red-500">
        {/* Sol taraf - Hero Icon */}
                        <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
                            {/* Rastgele bir HeroIcons ikonu burada svg formatında eklenmiştir */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        {/* Sağ taraf - Metinler */}
                        <div className="flex-1 ml-4">
                            <p className="text-lg font-semibold">Jamal Walker</p>
                            <p className="text-sm">Member ID: FL4321</p>
                            <p className="text-sm">Last Touchpoint: Jan 1, 2024 @ 17:14</p>
                        </div>
                    </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
