import React from 'react';

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
    <div className="flex justify-center items-center">
      <div
        className="relative text-white p-6 rounded-lg shadow-lg overflow-hidden max-w-sm w-full"
        style={{
          background: 'linear-gradient(180deg, rgba(17,24,39,1) 0%, rgba(29,78,216,1) 100%)',
          minHeight: '400px', // Set a minimum height for the card
        }}
      >
        {/* Logo with transparent background and shadow */}
        <div className="absolute bottom-6 left-4 p-2" style={{ background: 'rgba(255, 255, 255, 0.2)', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)', borderRadius: '10px' }}>
          <img
            src="https://park14.com/wp-content/uploads/2021/06/ParkLogo-White.png"
            alt="Park Logo"
            style={{ width: '60px', height: '36px' }} // Made the logo smaller and adjusted the size
          />
      </div>

        <div className="text-xl mb-2">THE PARK AT 14TH</div>
        <div className="text-5xl font-semibold mb-2">FB12344</div>
        <div className="text-sm mb-4">Membership Number</div>
        <div className="text-3xl font-semibold mb-2">Freddie Brown</div>
        <div className="text-md mb-4">Member since: Jan 1.2024</div>

        {/* QR Code aligned with the logo at the bottom */}
        <div className="absolute bottom-0 right-0 p-4">
          <img
            src="https://media.istockphoto.com/id/828088276/vector/qr-code-illustration.jpg?s=612x612&w=0&k=20&c=FnA7agr57XpFi081ZT5sEmxhLytMBlK4vzdQxt8A70M="
            alt="QR Code"
            style={{ width: '80px', height: '80px', }}
          />
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
