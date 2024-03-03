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
    { name: "John Doe", username: "john", role: "Developer", image: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg", status: "Active" },
    { name: "Jane Smith", username: "jane", role: "Designer", image: "https://img.freepik.com/free-photo/medium-shot-happy-woman-holding-shopping-bags_23-2148671804.jpg", status: "In-Active" },
    { name: "Mike Johnson", username: "mike", role: "Manager", image: "https://img.freepik.com/free-photo/confident-young-businessman-glasses-suit_1098-20832.jpg", status: "VIP" },
    { name: "Emily Davis", username: "emily", role: "HR Specialist", image: "https://img.freepik.com/free-photo/confident-female-professional-eyeglasses_1262-20950.jpg", status: "Active" },
    { name: "Chris Brown", username: "chris", role: "Marketing Lead", image: "https://img.freepik.com/free-photo/joyful-curly-businesswoman-pointing-upper-left-corner-smiling_176420-20679.jpg", status: "In-Active" },
    { name: "Lisa White", username: "lisa", role: "Product Manager", image: "https://img.freepik.com/free-photo/smiling-woman-pointing-fingers-away_171337-14362.jpg", status: "VIP" },
    { name: "James Green", username: "james", role: "Software Engineer", image: "https://img.freepik.com/free-photo/medium-shot-smiley-man-with-glasses_23-2148989680.jpg", status: "All Members" },
    { name: "Sarah Miller", username: "sarah", role: "Data Analyst", image: "https://img.freepik.com/free-photo/positive-woman-with-broad-smile-points-index-finger-upper-right-corner_273609-16017.jpg", status: "Active" },
    { name: "Matthew Wilson", username: "matthew", role: "CTO", image: "https://img.freepik.com/free-photo/young-executive-smiling_1098-20869.jpg", status: "VIP" },
    { name: "Samantha Brown", username: "samantha", role: "UI/UX Designer", image: "https://img.freepik.com/free-photo/smiling-girl-eyeglasses_1157-16454.jpg", status: "In-Active" }
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
      <div className="navbar bg-base-100 shadow-lg fixed top-[60px] w-full z-10">
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
      <div className="flex fixed justify-center items-center gap-2 py-2 bg-base-100 bottom-[70px] left-0 right-0">
        <button onClick={() => changeText('In-Active')} className="px-4 py-2 bg-base-300 text-black rounded">In-Active</button>
        <button onClick={() => changeText('Active')} className="px-4 py-2 bg-base-300 text-black rounded">Active</button>
        <button onClick={() => changeText('VIP')} className="px-4 py-2 bg-base-300 text-black rounded">VIP</button>
        <button onClick={() => changeText('All Members')} className="px-4 py-2 bg-base-300 text-black rounded">All Members</button>
      </div>
      <BottomNavBar />
    </main>
  );
}

export default Personal;
