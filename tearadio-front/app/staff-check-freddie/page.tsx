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
        imageSrc="https://media.licdn.com/dms/image/D4D03AQHHth0x1y45UQ/profile-displayphoto-shrink_800_800/0/1690492309256?e=2147483647&v=beta&t=VuqZgne2pk65Lups_GZf-CPlgfuTrjoIvg2l962-G0I" // Resim URL'si
        score="95" // Skor
        lastTouchpoint="2024-01-01" // Son temas noktası
      />
        
    </div>
  );
};

export default Page;
