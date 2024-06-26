"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type MemberCardProps = {
  membershipNumber: string;
  memberName: string;
  memberSinceDate: string;
};

const IdCardStaff: React.FC<MemberCardProps> = ({
  membershipNumber,
  memberName,
  memberSinceDate,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="relative text-black p-6 rounded-lg shadow-lg overflow-hidden max-w-sm w-full"
        style={{
          background: '#D9D9D9',
          minHeight: '400px',
        }}
        
      >
        {/* Logo with transparent background and shadow */}
        <div className="absolute bottom-8 left-4 p-2" style={{ background: 'rgba(255, 255, 255, 0.2)', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)', borderRadius: '10px' }}>
  <Link href="https://thebulldog.com/" passHref>
      <Image
        src="https://i.ibb.co/561xXm6/bulldog-amsterdam-logo-kds0yv7qmsjjgwh3.png"
        alt="Park Logo"
        width={40}
        height={40}
      />
  </Link>
</div>


        <div className="text-xl mb-2">THE BULLDOG</div>
        <div className="text-5xl font-semibold mb-2">{membershipNumber}</div>
        <div className="text-sm mb-4">Staff Number</div>
        <div className="text-3xl font-semibold mb-2">{memberName}</div>
        <div className="text-sm mb-4">Member since: {memberSinceDate}</div>

        {/* QR Code aligned with the logo at the bottom */}
        <div className="absolute bottom-0 right-0 p-4" onClick={() => setModalOpen(true)} style={{ cursor: 'pointer' }}>
          <Image
            src="https://media.istockphoto.com/id/828088276/vector/qr-code-illustration.jpg?s=612x612&w=0&k=20&c=FnA7agr57XpFi081ZT5sEmxhLytMBlK4vzdQxt8A70M="
            alt="QR Code"
            width={80}
            height={80}
          />
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={() => setModalOpen(false)}>
            <div className="modal-body p-5 bg-white">
              <Image
            src="https://media.istockphoto.com/id/828088276/vector/qr-code-illustration.jpg?s=612x612&w=0&k=20&c=FnA7agr57XpFi081ZT5sEmxhLytMBlK4vzdQxt8A70M="
            alt="QR Code"
                width={300}
                height={300}
              />
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center mt-4 w-12 h-2"> {/* Circular div with blue border */}
  
</div>


      <p>Click QR to scan</p>
    </div>
  );
};

export default IdCardStaff;
