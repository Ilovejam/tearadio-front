"use client";
import React, { useState } from 'react';
import Image from "next/image";
import Navbar from "./components/Navbar";
import IdCardMember from "./components/IdCardMember";
import IdCardStaff from './components/IdCardStaff';
import MemberCard from './components/MemberCard';
import BottomNavBar from './components/BottomNavBar';
import TalentCard from './components/TalentCard';
import { UserGroupIcon } from '@heroicons/react/24/outline';


/* declare global {
  interface Window { Chatbot: any; }
} */

export default function Home() {
  

  const [cardsPerRow, setCardsPerRow] = useState(5);
  const [showSettings, setShowSettings] = useState(false); // Ayarlar menüsünü gösterip gizlemek için

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

      
<IdCardStaff
            membershipNumber="JW23311"
            memberName="Freddie asd"
            memberSinceDate="Jan 1, 2024"
          />


    </main>
  );
}
