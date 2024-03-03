import React from 'react';
import MemberCard from '../components/MemberCard'; // Doğru yolu kullanın

const Page = () => {
  return (
    // Ekranın tam ortasına yerleştirmek için flex kullanın
    <div className="flex justify-center items-center min-h-screen">
      <MemberCard
        color="bg-green-500" // Renk seçimi
        memberName="Angelica Wesley" // Kullanıcı adı
        memberId="AW23122" // Kullanıcı ID'si
        imageSrc="https://hairstyles.thehairstyler.com/hairstyle_views/front_view_images/4072/original/Angelica-Bridges.jpg" // Resim URL'si
        score="90" // Skor
        lastTouchpoint="2024-01-01" // Son temas noktası
      />
        
    </div>
  );
};

export default Page;
