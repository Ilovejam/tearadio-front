"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import BottomNavBar from '../components/BottomNavBar';
import IdCardMember from '../components/IdCardMember';
import IdCardStaff from '../components/IdCardStaff';
import TalentCard from '../components/TalentCard';

const Personal = () => {
    

  const [cardsPerRow, setCardsPerRow] = useState(5);
  const [showSettings, setShowSettings] = useState(false); // Ayarlar menüsünü gösterip gizlemek için
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

  const zoomIn = () => {
    setCardsPerRow(prev => Math.max(1, prev - 1)); // En az 1 kart olacak şekilde sınırlandır
  };

  const zoomOut = () => {
    setCardsPerRow(prev => prev + 1); // Kart sayısını artır
  };

  const toggleSettings = () => {
    setShowSettings(prev => !prev); // Ayarlar menüsünün gösterilip gösterilmeyeceğini değiştir
  };

  const gridStyle = {
    gridTemplateColumns: `repeat(${cardsPerRow}, minmax(0, 1fr))`
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <Navbar />

      <div className="mb-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={toggleSettings}>Zoom</button>
        {showSettings && (
          <div className="mt-2 py-2 w-48 bg-white shadow-lg rounded-lg">
            <button onClick={zoomIn} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Zoom In</button>
            <button onClick={zoomOut} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Zoom Out</button>
          </div>
        )}
      </div>


 
      <div style={gridStyle} className="grid gap-4">
     <TalentCard
        name="Mark Magellan"
        username="Mark"
        role="Financial Planner"
        image="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" // Gerçek bir resim URL'si ile değiştirin
    />
     <TalentCard
        name="Mark Magellan"
        username="Mark"
        role="Financial Planner"
        image="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" // Gerçek bir resim URL'si ile değiştirin
    />
    <TalentCard
        name="Mark Magellan"
        username="Mark"
        role="Financial Planner"
        image="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" // Gerçek bir resim URL'si ile değiştirin
    />
    <TalentCard
        name="Mark Magellan"
        username="Mark"
        role="Financial Planner"
        image="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" // Gerçek bir resim URL'si ile değiştirin
    />
    <TalentCard
        name="Mark Magellan"
        username="Mark"
        role="Financial Planner"
        image="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" // Gerçek bir resim URL'si ile değiştirin
    />
    <TalentCard
        name="Mark Magellan"
        username="Mark"
        role="Financial Planner"
        image="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" // Gerçek bir resim URL'si ile değiştirin
    />
    <TalentCard
        name="Mark Magellan"
        username="Mark"
        role="Financial Planner"
        image="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" // Gerçek bir resim URL'si ile değiştirin
    />
    <TalentCard
        name="Mark Magellan"
        username="Mark"
        role="Financial Planner"
        image="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" // Gerçek bir resim URL'si ile değiştirin
    />
    <TalentCard
        name="Mark Magellan"
        username="Mark"
        role="Financial Planner"
        image="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" // Gerçek bir resim URL'si ile değiştirin
    />
    <TalentCard
        name="Mark Magellan"
        username="Mark"
        role="Financial Planner"
        image="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" // Gerçek bir resim URL'si ile değiştirin
    />
    <TalentCard
        name="Mark Magellan"
        username="Mark"
        role="Financial Planner"
        image="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" // Gerçek bir resim URL'si ile değiştirin
    />
     <TalentCard
        name="Mark Magellan"
        username="Mark"
        role="Financial Planner"
        image="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" // Gerçek bir resim URL'si ile değiştirin
    />
    <TalentCard
        name="Mark Magellan"
        username="Mark"
        role="Financial Planner"
        image="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" // Gerçek bir resim URL'si ile değiştirin
    />
    <TalentCard
        name="Mark Magellan"
        username="Mark"
        role="Financial Planner"
        image="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" // Gerçek bir resim URL'si ile değiştirin
    />
    <TalentCard
        name="Mark Magellan"
        username="Mark"
        role="Financial Planner"
        image="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" // Gerçek bir resim URL'si ile değiştirin
    />
    <TalentCard
        name="Mark Magellan"
        username="Mark"
        role="Financial Planner"
        image="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" // Gerçek bir resim URL'si ile değiştirin
    />
    <TalentCard
        name="Mark Magellan"
        username="Mark"
        role="Financial Planner"
        image="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" // Gerçek bir resim URL'si ile değiştirin
    />
    <TalentCard
        name="Mark Magellan"
        username="Mark"
        role="Financial Planner"
        image="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" // Gerçek bir resim URL'si ile değiştirin
    />
    <TalentCard
        name="Mark Magellan"
        username="Mark"
        role="Financial Planner"
        image="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" // Gerçek bir resim URL'si ile değiştirin
    />
    <TalentCard
        name="Mark Magellan"
        username="Mark"
        role="Financial Planner"
        image="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" // Gerçek bir resim URL'si ile değiştirin
    />

    </div> 




      <BottomNavBar></BottomNavBar>
    </main>
  );
}

export default Personal;
