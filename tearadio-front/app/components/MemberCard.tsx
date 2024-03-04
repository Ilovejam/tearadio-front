"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import ConfirmAddNote from '../components/Modals/ConfirmAddNode';

interface MemberCardProps {
  color: string;
  memberName: string;
  memberId: string;
  imageSrc: string;
  score: string;
  lastTouchpoint: string;
}


const MemberCard: React.FC<MemberCardProps> = ({
  color,
  memberName,
  memberId,
  imageSrc,
  score,
  lastTouchpoint,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false); // New state for thank you message
  const router = useRouter(); // useRouter hook for navigation
  const handleSubmitNote = (note: any) => {
    console.log("Note Added:", note);
    setShowThankYou(true); // Show thank you message
    setTimeout(closeAndNavigate, 2000); // Wait 2 seconds, then navigate
  };


  const closeAndNavigate = () => {
    setShowThankYou(false); // Ensure thank you message is hidden
    setIsModalOpen(false); // Close the modal
    router.push('/staff'); // Navigate to /staff
  };

  const handleConfirm = () => {
    console.log("Confirm clicked");
    setShowThankYou(true); // Show thank you message
    setTimeout(closeAndNavigate, 2000); // Wait 2 seconds, then navigate
  };

// Modalı açma fonksiyonu
const handleOpenModal = () => {
  setIsModalOpen(true);
};

// Modalı kapatma fonksiyonu
const handleCloseModal = () => {
  setIsModalOpen(false);
};

// Confirm butonuna basıldığında çalışacak fonksiyon

// Add Note butonuna basıldığında çalışacak fonksiyon (notunuzu nasıl işleyeceğinize bağlı olarak değişiklik gösterebilir)
const handleAddNote = (note: any) => {
  console.log("Note Added:", note);
  // Notu işleme veya durum güncelleme
  handleCloseModal(); // Modalı kapat
};
  return (
    <div className="flex flex-col items-center">
      <div className={`relative w-96 h-auto bg-base-100 shadow-xl border-8 ${color}`}>
        <div className="absolute top-[-20px] right-[-15px]">
          <CheckCircleIcon className={`h-12 w-12 ${color} text-white rounded-full`} />
        </div>
        <figure className=" overflow-hidden">
  <Image src={imageSrc} alt={memberName} width={500} height={300} />
  <div className="absolute right-0 bottom-28 m-4 bg-gray-400 rounded-full flex items-center justify-center" style={{ width: '80px', height: '80px' }}>
    <p className="text-white text-4xl font-bold text-stroke " style={{ WebkitTextStroke: '2px black' }}>{score}</p>
  </div>
</figure>
        <div className={`p-5 text-white`}>
          <h2 className="text-2xl font-bold" >{memberName}</h2>
          <p>ID: {memberId}</p>
          <p>Score: {score}</p>
          <p>Last Touchpoint: {lastTouchpoint}</p>
        </div>
      </div>
      <div onClick={handleOpenModal}  className="grid grid-cols-2 gap-4 mt-4 justify-center">
      <div className="bg-white p-2 shadow-md flex items-center justify-start w-36 h-12 rounded-lg">
  <div className="bg-orange-500 rounded-md p-2 mr-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
    </svg>
  </div>
  <span className="text-sm text-gray-700">Entrance</span>
</div>

<div className="bg-white p-2 shadow-md flex items-center justify-start w-36 h-12 rounded-lg">
  <div className="bg-red-500 rounded-md p-2 mr-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
    </svg>
  </div>
  <span className="text-sm text-gray-700">Exit</span>
</div>
<div className="bg-white p-2 shadow-md flex items-center justify-start w-36 h-12 rounded-lg">
  <div className="bg-blue-500 rounded-md p-2 mr-2">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
</svg>

  </div>
  <span className="text-sm text-gray-700">Bar</span>
</div>

<div className="bg-white p-2 shadow-md flex items-center justify-start w-36 h-12 rounded-lg">
  <div className="bg-purple-500 rounded-md p-2 mr-2">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
</svg>

  </div>
  <span className="text-sm text-gray-700">Table</span>
</div>
 
</div>
<ConfirmAddNote
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
        onAddNote={handleSubmitNote} // Adjust this prop to pass the new function
        showThankYou={showThankYou} // Pass showThankYou state to the modal
      />

    </div>
  );
};

export default MemberCard;
