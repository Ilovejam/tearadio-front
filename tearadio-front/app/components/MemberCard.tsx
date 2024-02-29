import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

// Updates branch'ındaki değişiklikleri tercih ediyorum
interface MemberCardProps {
  color: string;
  memberName: string;
  memberId: string;
  imageSrc: string;
  score: string;
  lastTouchpoint: string;
}

interface ClassTypes {
  borderColor: string;
  bgColor: string;
}

interface Classes {
  [key: string]: ClassTypes; // Bu index imzası herhangi bir string anahtara izin verir
  blue: ClassTypes;
  red: ClassTypes;
  yellow: ClassTypes;
  green: ClassTypes;
}

const MemberCard: React.FC<MemberCardProps> = ({ color, memberName, memberId, imageSrc, score, lastTouchpoint }) => {
  const classes: Classes = {
    blue: { borderColor: 'blue-500', bgColor: 'blue-100' },
    red: { borderColor: 'red-500', bgColor: 'red-100' },
    yellow: { borderColor: 'yellow-500', bgColor: 'yellow-100' },
    green: { borderColor: 'green-500', bgColor: 'green-100' },
  };

  const { borderColor, bgColor } = classes[color] || classes.blue;

  return (
    <div className={`relative card w-96 h-auto bg-base-100 shadow-xl border-8 ${borderColor}`}>
      <div className="absolute top-[-20px] right-[-15px]">
        <CheckCircleIcon className={`h-12 w-12 text-white ${bgColor} rounded-full`} />
      </div>
      <figure className="overflow-hidden">
        <Image  src={imageSrc} alt={memberName} width={500} height={300}  />
      </figure>
      <div className={`card-body ${bgColor} text-white`}>
        {/* İçerik */}
      </div>
    </div>
  );
};

export default MemberCard;
