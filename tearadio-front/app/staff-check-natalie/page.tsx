import React from 'react';
import MemberCard from '../components/MemberCard'; // Doğru yolu kullanın
const Page = () => {
  return (
    // Ekranın tam ortasına yerleştirmek için flex kullanın
    <div className="flex justify-center items-center min-h-screen">
      <MemberCard
        color="bg-blue-500" // Renk seçimi
        memberName="Natalie Walker" // Kullanıcı adı
        memberId="NW89213" // Kullanıcı ID'si
        imageSrc="https://m.media-amazon.com/images/M/MV5BODYxNzE4OTk5Nl5BMl5BanBnXkFtZTcwODYyMDYzMw@@._V1_.jpg" // Resim URL'si
        score="70" // Skor
        lastTouchpoint="2024-01-01" // Son temas noktası
      />
        
    </div>
  );
};

export default Page;
