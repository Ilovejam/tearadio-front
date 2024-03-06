"use client";
import React from 'react'
import IdCardStaff from '../components/IdCardStaff';
import Navbar from '../components/Navbar';
import { BubbleChat } from 'flowise-embed-react';

const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      
        <Navbar />

    
    <IdCardStaff
          membershipNumber="KS12011"
          memberName="Karim Shehata"
          memberSinceDate="Jan 1, 2024"
        />
    <BubbleChat chatflowid="df8d6be2-ec68-45a4-a7e4-9d833a492c79" apiHost="https://business-chat.onrender.com" />

  </div>
  )
}

export default page