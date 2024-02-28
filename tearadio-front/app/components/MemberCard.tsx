import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

type MemberCardProps = {
  color: 'blue' | 'red' | 'yellow' | 'green'; // Specify the allowed colors
  memberName: string;
  memberId: string;
  imageSrc: string;
  score: string; // or string, depending on what score is
  lastTouchpoint: string;
};
const MemberCard = ({ color, memberName, memberId, imageSrc, score, lastTouchpoint }: MemberCardProps) => {
  // Define the classes based on the color prop
  const classes = {
    blue: {
      borderColor: 'border-blue-500',
      bgColor: 'bg-blue-500',
    },
    red: {
      borderColor: 'border-red-500',
      bgColor: 'bg-red-500',
    },
    yellow: {
      borderColor: 'border-yellow-500',
      bgColor: 'bg-yellow-500',
    },
    green: {
      borderColor: 'border-green-500',
      bgColor: 'bg-green-500',
    },
  };

  // Extract the classes for the provided color or default to blue
  const { borderColor, bgColor } = classes[color] || classes.blue;

  return (
    <div className={`relative card w-96 h-auto bg-base-100 shadow-xl border-8 ${borderColor}`}>
      <div className="absolute top-[-20px] right-[-15px]">
        <CheckCircleIcon className={`h-12 w-12 text-white ${bgColor} rounded-full`} />
      </div>
      <figure className="overflow-hidden">
      <Image 
    src={imageSrc} 
    alt={memberName} 
    width={500}  // Replace with actual width
    height={300} // Replace with actual height
    objectFit="cover" // This ensures the image covers the area, you can adjust as needed
  />      </figure>
      <div className={`card-body ${bgColor} text-white`}>
        <div className="relative">
          <h2 className="card-title">
            {memberName}
            <div className="badge badge-secondary">VIP</div>
          </h2>
          <p className="border-b border-white pb-2">Member ID: {memberId}</p>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2">
            <div className="rounded-full bg-transparent border-2 border-white text-white w-8 h-8 flex justify-center items-center">{score}</div>
          </div>
        </div>
        <p>Last Touchpoint: {lastTouchpoint}</p>
      </div>
    </div>
  );
};

export default MemberCard;
