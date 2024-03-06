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
    <BubbleChat chatflowid="1e5db55c-3ff3-429c-9477-cfb74a89746d" apiHost="https://business-chat.onrender.com" />

  </div>
  )
}

export default page
