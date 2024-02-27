"use client";
import React, { useEffect } from 'react';
import Image from "next/image";
import Navbar from "./components/Navbar";
import IdCard from "./components/IdCard";
import MemberCard from './components/MemberCard';
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
      {/* <IdCard
        membershipNumber="FB12344"
        memberName="Freddie Brown"
        memberSinceDate="Jan 1, 2024"
      /> */}
       <div className="grid grid-cols-2 gap-4">
       <MemberCard 
  color="blue" 
  memberName="Jamal Walker" 
  memberId="JD5678" 
  imageSrc="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" 
  score="10"
  lastTouchpoint="Feb 24, 2024 | 10:15 AM"
/>
<MemberCard 
  color="green" 
  memberName="Jane Doe" 
  memberId="JD5678" 
  imageSrc="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?cs=srgb&dl=pexels-christina-morillo-1181690.jpg&fm=jpg" 
  score="74"
  lastTouchpoint="Feb 24, 2024 | 10:15 AM"
/>
<MemberCard 
  color="yellow" 
  memberName="Jamal Destroyer" 
  memberId="JD5678" 
  imageSrc="https://c8.alamy.com/comp/F2197J/boxer-dog-with-serious-expression-in-studio-F2197J.jpg" 
  score="100"
  lastTouchpoint="Feb 24, 2024 | 10:15 AM"
/>
<MemberCard 
  color="red" 
  memberName="Bille Doe" 
  memberId="JD5678" 
  imageSrc="https://media.istockphoto.com/id/1253034911/photo/young-man-standing-with-hands-in-pockets-wearing-glasses-and-blank-white-tshirt-with-copy.jpg?s=612x612&w=0&k=20&c=3iOYY02-rAQgeSmyHeV9DOnJszeusKrpVy3ouCwCux0=" 
  score="-"
  lastTouchpoint="Feb 24, 2024 | 10:15 AM"
/>


      </div>

    </main>
  );
}
