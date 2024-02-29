import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
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
  // Define the classes based on the color prop
  const classes: Classes = {
    blue: { borderColor: 'blue-500', bgColor: 'blue-100' },
    red: { borderColor: 'red-500', bgColor: 'red-100' },
    yellow: { borderColor: 'yellow-500', bgColor: 'yellow-100' },
    green: { borderColor: 'green-500', bgColor: 'green-100' },
  };

  // Extract the classes for the provided color or default to blue
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
      
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       <MemberCard 
       color="blue" 
      memberName="Jamal Walker" 
      memberId="JD5678" 
      imageSrc="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" 
      score="10"
      lastTouchpoint="Feb 24, 2024 | 10:15 AM"
    />
<MemberCard 
  color="green" 
  memberName="Jane Doe" 
  memberId="JD5678" 
  imageSrc="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?cs=srgb&dl=pexels-christina-morillo-1181690.jpg&fm=jpg" 
  score="74"
  lastTouchpoint="Feb 24, 2024 | 10:15 AM"
/>
<MemberCard 
  color="yellow" 
  memberName="Jamal Destroyer" 
  memberId="JD5678" 
  imageSrc="https://c8.alamy.com/comp/F2197J/boxer-dog-with-serious-expression-in-studio-F2197J.jpg" 
  score="100"
  lastTouchpoint="Feb 24, 2024 | 10:15 AM"
/>
<MemberCard 
  color="red" 
  memberName="Bille Doe" 
  memberId="JD5678" 
  imageSrc="https://media.istockphoto.com/id/1253034911/photo/young-man-standing-with-hands-in-pockets-wearing-glasses-and-blank-white-tshirt-with-copy.jpg?s=612x612&w=0&k=20&c=3iOYY02-rAQgeSmyHeV9DOnJszeusKrpVy3ouCwCux0=" 
  score="-"
  lastTouchpoint="Feb 24, 2024 | 10:15 AM"
/>


      </div>  */}
    </div>
  );
};

export default MemberCard;
