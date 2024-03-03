import React from 'react';
import MemberCard from '../components/MemberCard'; // Doğru yolu kullanın

const Page = () => {
  return (
    // Ekranın tam ortasına yerleştirmek için flex kullanın
    <div className="flex justify-center items-center min-h-screen">
      <MemberCard
        color="bg-green-500" // Renk seçimi
        memberName="Jessica Porter" // Kullanıcı adı
        memberId="JP10111" // Kullanıcı ID'si
        imageSrc="https://media.allure.com/photos/64504a1330ae68fbb216f447/1:1/w_2880,h_2880,c_limit/jessica%20chastain%20met%20gala%202023%20platinum%20blonde%20hero.jpg" // Resim URL'si
        score="60" // Skor
        lastTouchpoint="2024-01-01" // Son temas noktası
      />
        
    </div>
  );
};

export default Page;
