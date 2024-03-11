import React from 'react';
import MemberCard from '../components/MemberCard'; // Doğru yolu kullanın

const Page = () => {
  return (
    // Ekranın tam ortasına yerleştirmek için flex kullanın
    <div className="flex justify-center items-center min-h-screen">
      <MemberCard
        color="bg-red-500" // Renk seçimi
        memberName="Freddie Brown" // Kullanıcı adı
        memberId="FB12345" // Kullanıcı ID'si
        imageSrc="https://iili.io/JMy62Tv.png" // Resim URL'si
        score="95" // Skor
        lastTouchpoint="" 
        freedrink='0/4'
      />
        
    </div>
  );
};

export default Page;
