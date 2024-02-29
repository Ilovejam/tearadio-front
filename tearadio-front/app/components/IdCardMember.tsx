import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type MemberCardProps = {
  membershipNumber: string;
  memberName: string;
  memberSinceDate: string;
};

const IdCardMember: React.FC<MemberCardProps> = ({
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
        <div className="absolute bottom-8 left-4 p-2" style={{ background: 'rgba(255, 255, 255, 0.2)', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)', borderRadius: '10px' }}>
  <Link href="https://park14.com/" passHref>
      <Image
        src="https://park14.com/wp-content/uploads/2021/06/ParkLogo-White.png"
        alt="Park Logo"
        width={40}
        height={40}
      />
  </Link>
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
      <div className="flex justify-center items-center mt-4 border-2 border-blue-500 rounded-full w-12 h-12"> {/* Circular div with blue border */}
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="w-6 h-6"> {/* SVG with blue stroke */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
  </svg>
</div>


      <p>Hold the reader</p>
    </div>
  );
};

export default IdCardMember;
