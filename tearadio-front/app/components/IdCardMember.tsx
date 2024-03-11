"use client"
import React, { useState } from 'react';


import Image from 'next/image';
import Link from 'next/link';

type MemberCardProps = {
  membershipNumber: string;
  memberName: string;
  memberSinceDate: string;
  qrCodeUrl: string;
  freedrink: string;
};

const IdCardMember: React.FC<MemberCardProps> = ({
  membershipNumber,
  memberName,
  memberSinceDate,
  qrCodeUrl,
  freedrink
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

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
        <div className="text-5xl font-semibold mb-2">{membershipNumber}</div>
        <div className="text-sm mb-4">Membership Number</div>
        <div className="text-3xl font-semibold mb-2">{memberName}</div>
        <div className="text-md mb-4">Member since: {memberSinceDate}</div>

        <div className="absolute bottom-0 right-0 p-4" onClick={() => setModalOpen(true)} style={{ cursor: 'pointer' }}>
          <Image
            src={qrCodeUrl}
            alt="QR Code"
            width={80}
            height={80}
          />
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={() => setModalOpen(false)}>
            <div className="modal-body p-5 bg-white">
              <Image
                src={qrCodeUrl}
                alt="QR Code"
                width={300}
                height={300}
              />
            </div>
          </div>
        )}
      </div>

      <p className='text-xl mt-5'>{freedrink}</p>
    </div>
  );
};

export default IdCardMember;
