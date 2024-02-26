"use client";
import React, { useEffect } from 'react';
import Image from "next/image";
import Navbar from "./components/Navbar";
import MemberCard from "./components/MemberCard";
declare global {
  interface Window { Chatbot: any; }
}

export default function Home() {
  useEffect(() => {
    // Script etiketini oluştur
        // Script etiketini oluştur
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";
        script.type = 'module';
        script.async = true;
    
        script.onload = () => {
          // Script yüklendikten sonra Chatbot'u başlat
          window.Chatbot.init({
            chatflowid: "f52b5b25-2cf0-4e02-9134-c557de28450b",
            apiHost: "https://business-chat.onrender.com",
          });
        };
    
    

    // Script etiketini document'e ekle
    document.body.appendChild(script);

    // Unmount edildiğinde script'i kaldır
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <MemberCard
        membershipNumber="FB12344"
        memberName="Freddie Brown"
        memberSinceDate="Jan 1, 2024"
      />

    </main>
  );
}
