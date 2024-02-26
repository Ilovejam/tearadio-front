import React from 'react';
import Image from 'next/image';
type MemberCardProps = {
  membershipNumber: string;
  memberName: string;
  memberSinceDate: string;
};

const MemberCard: React.FC<MemberCardProps> = ({
  membershipNumber,
  memberName,
  memberSinceDate,
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="relative text-white p-6 rounded-lg shadow-lg overflow-hidden max-w-sm w-full"
        style={{
          background: 'linear-gradient(180deg, rgba(17,24,39,1) 0%, rgba(29,78,216,1) 100%)',
          minHeight: '400px', // Set a minimum height for the card
        }}
      >
        {/* Logo with transparent background and shadow */}
        <div className="absolute bottom-6 left-4 p-2" style={{ background: 'rgba(255, 255, 255, 0.2)', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)', borderRadius: '10px' }}>
          <Image
            src="https://park14.com/wp-content/uploads/2021/06/ParkLogo-White.png"
            alt="Park Logo"
            width= {80}
            height= {80}
          />
      </div>

        <div className="text-xl mb-2">THE PARK AT 14TH</div>
        <div className="text-5xl font-semibold mb-2">FB12344</div>
        <div className="text-sm mb-4">Membership Number</div>
        <div className="text-3xl font-semibold mb-2">Freddie Brown</div>
        <div className="text-md mb-4">Member since: Jan 1.2024</div>

        {/* QR Code aligned with the logo at the bottom */}
        <div className="absolute bottom-0 right-0 p-4">
          <Image
            src="https://media.istockphoto.com/id/828088276/vector/qr-code-illustration.jpg?s=612x612&w=0&k=20&c=FnA7agr57XpFi081ZT5sEmxhLytMBlK4vzdQxt8A70M="
            alt="QR Code"
            width= {80}
            height= {80}
          />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#007bff" className="w-6 h-6 mt-4"> {/* Mavi renk için stroke="#007bff" */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
      </svg>
    </div>
  );
};

export default MemberCard;
