import React from 'react';
import MemberCard from '../components/MemberCard'; // Doğru yolu kullanın

const Page = () => {
  return (
    // Ekranın tam ortasına yerleştirmek için flex kullanın
    <div className="flex justify-center items-center min-h-screen">
      <MemberCard
        color="bg-yellow-500" // Renk seçimi
        memberName="Jessica Porter" // Kullanıcı adı
        memberId="JP10111" // Kullanıcı ID'si
        imageSrc="https://i.ibb.co/561xXm6/bulldog-amsterdam-logo-kds0yv7qmsjjgwh3.png" 
        score="88" // Skor
        lastTouchpoint="2024-01-01" // Son temas noktası
        freedrink='4/4'

      />
        
    </div>
  );
};

export default Page;
