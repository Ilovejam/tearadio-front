"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import BottomNavBar from '../components/BottomNavBar';
import TalentCard, { TalentCardProps } from '../components/TalentCard'; // TalentCardProps'u içe aktarıyoruz
import Bottom from '../components/UserSeperate/Bottom';
import Top from '../components/UserSeperate/Top';

const Personal = () => {
  const [cardsPerRow, setCardsPerRow] = useState(5);
  const [buttonText, setButtonText] = useState<'In-Active' | 'Active' | 'VIP' | 'All Members'>('All Members'); // buttonText'in tipini belirttim
  const [filterStatus, setFilterStatus] = useState<'In-Active' | 'Active' | 'VIP' | 'All Members'>('All Members');

  const cardsData: TalentCardProps[] = [
    { name: "Erik Rodin", username: "erik", role: "Developer", image: "https://assets-global.website-files.com/624c15e792d80d449d447b65/651fcd004c72e1c16c9a0321_2UQ0Vej_y1-WEEAdJSnTMO4yzi3yM5pwjsTw-Djm2bc.jpeg", status: "Active" },
    { name: "Ali Draycott", username: "a.draycot", role: "Designer", image: "https://assets-global.website-files.com/624c15e792d80d449d447b65/651fcce3cc1b5f34c1eae938_92T2gc67u8TURbjUIHYWMa9AnskTDJzdKYJniAoztNA.jpeg", status: "In-Active" },
    { name: "Ana Salles", username: "ana", role: "Manager", image: "https://assets-global.website-files.com/624c15e792d80d449d447b65/652ca06821a48bfbd9c5a2cc_ana-salles_profile-picture_attaGwfpHAcvgg3Um.webp", status: "VIP" },
    { name: "Jonas Altman", username: "jonas", role: "HR Specialist", image: "https://assets-global.website-files.com/624c15e792d80d449d447b65/652ca082c64b205154864ed8_jonas-altman-2_profile-picture_attbObm1d1UvguAQA.webp", status: "Active" },
    { name: "Gabriela Nespoli", username: "chris", role: "Marketing Lead", image: "https://assets-global.website-files.com/624c15e792d80d449d447b65/652ca052070e0e83666a06d5_gabriela-nespoli_profile-picture_attGCYlBJgi84MTbG.webp", status: "In-Active" },
    { name: "Mark Magellan", username: "mark", role: "Product Manager", image: "https://assets-global.website-files.com/624c15e792d80d449d447b65/652ca043071454dd38f1409b_mark-magellan_profile-picture_att2TQR7rDnlkIJ7T.webp", status: "VIP" },
    { name: "Dan Dimmock", username: "dan", role: "Software Engineer", image: "https://assets-global.website-files.com/624c15e792d80d449d447b65/651ee6dd88ac1508d2fb08c1_dan-dimmock_profile-picture_6be70d47-1ae2-4ad1-b9da-53189952ea2c.webp", status: "All Members" },
    { name: "Njoki Gitahi", username: "njoki", role: "Data Analyst", image: "https://assets-global.website-files.com/624c15e792d80d449d447b65/651fcd3c21ce06029fc106d7_X7jnXeW9rBmrrYIYggW5lXYhAdIhUY-7O4pa6WqKMfQ.png", status: "Active" },
    { name: "Rula El Kaliouby", username: "Rula", role: "CTO", image: "https://assets-global.website-files.com/624c15e792d80d449d447b65/652ca05bf8c55b8848641d23_rula-el-kaliouby_profile-picture_attWuZAnqjVv1x9D5.webp", status: "VIP" },
    { name: "Lindsey Mosby", username: "lindsey", role: "UI/UX Designer", image: "https://assets-global.website-files.com/624c15e792d80d449d447b65/652ca093c96bc509bc8e4683_lindsey-mosby_profile-picture_7aa2e825-fadc-4823-b7c5-434d32099011.webp", status: "In-Active" },
    { name: "Lizzie Azzolino", username: "lizzie", role: "CTO", image: "https://assets-global.website-files.com/624c15e792d80d449d447b65/651ee6e91fbb9c5686e8e064_lizzie-azzolino_profile-picture_214119de-e7f6-4a10-a3c1-00df63ebc93f.webp", status: "In-Active" },
    { name: "Özlem Tuskan", username: "ozlem", role: "UI/UX Designer", image: "https://assets-global.website-files.com/624c15e792d80d449d447b65/651fcd410703f3d23903cf95_K_TZmFAdkz-a2O0LR9QQxTAXpTvGUNr26AzVf9Gv__w.jpeg", status: "In-Active" }
  ];

  const filteredCards: TalentCardProps[] = cardsData.filter(card => filterStatus === 'All Members' || card.status === filterStatus);

  useEffect(() => {
    const handleResize = () => {
      // Ekran genişliği 768px'den küçükse kart sayısını 1 yap
      if (window.innerWidth < 768) {
        setCardsPerRow(1);
      } else {
        // Ekran genişliği 768px ve üzeriyse varsayılan kart sayısını kullan
        setCardsPerRow(5);
      }
    };

    // Komponent yüklendiğinde ve pencere boyutu değiştiğinde çalıştır
    handleResize(); // İlk yükleme için çalıştır
    window.addEventListener('resize', handleResize);

    // Komponentin temizlenme aşamasında event listener'ı kaldır
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const changeText = (newText: 'In-Active' | 'Active' | 'VIP' | 'All Members') => {
    setButtonText(newText); // Navbar'da gösterilecek metni güncelle
    setFilterStatus(newText); // Filtre durumunu güncelle
  };

  const zoomIn = () => {
    setCardsPerRow(prev => Math.max(1, prev - 1)); // En az 1 kart olacak şekilde sınırlandır
  };

  const zoomOut = () => {
    setCardsPerRow(prev => prev + 1); // Kart sayısını artır
  };

  const gridStyle = {
    gridTemplateColumns: `repeat(${cardsPerRow}, minmax(0, 1fr))`
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="navbar bg-white shadow-lg fixed top-[60px] w-full z-10">
        <Navbar />
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a onClick={zoomIn}>Zoom In</a></li>
              <li><a onClick={zoomOut}>Zoom Out</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">{buttonText}</a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </div>
      </div>
      <div style={gridStyle} className="grid gap-4 mt-10">
        {filteredCards.map((card, index) => (
          <TalentCard key={index} {...card} />
        ))}
      </div>
      {/* Üstteki butonlar için div, ekranın altında ve BottomNavBar üstünde sabitlenmiş */}
      <div className="flex fixed justify-center items-center gap-2 py-2 bg-white bottom-[70px] left-0 right-0">
        <button onClick={() => changeText('In-Active')} className="px-4 py-2 bg-gray-300 text-black rounded">In-Active</button>
        <button onClick={() => changeText('Active')} className="px-4 py-2 bg-gray-300 text-black rounded">Active</button>
        <button onClick={() => changeText('VIP')} className="px-4 py-2 bg-gray-300 text-black rounded">VIP</button>
        <button onClick={() => changeText('All Members')} className="px-4 py-2 bg-gray-300 text-black rounded">All Members</button>
      </div>
      <BottomNavBar />
    </main>
  );
}

export default Personal;
