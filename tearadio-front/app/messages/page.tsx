"use client";
import { useState } from 'react';
import React from 'react';
import { ArrowLeftIcon, StarIcon } from '@heroicons/react/24/outline';
import Navbar from '../components/Navbar';
import BottomNavBar from '../components/BottomNavBar';
import Image from 'next/image';
const Messages = () => {
  const [showAnnouncements, setShowAnnouncements] = useState(false);

  // Sample announcements data
  const announcements = [
    { id: 1, text: "Welcome to All Over Europe Kindred! Where every day is an adventure into the unknown and the dress code is always 'surprise me'." },
    { id: 2, text: "Urgent meeting scheduled for 3rd March at 10 AM. Topic: Debating the best pizza topping. Spoiler: It's pineapple." },
    { id: 3, text: "Friendly reminder: Submit your feedback by Friday or be forever haunted by the ghost of unfinished tasks." },
    { id: 4, text: "New discussion topic: Sustainable Travel. First question: Can we teleport yet? If not, why not?" },
    { id: 5, text: "Exciting photo contest starting next week! Theme: Best impersonation of a vegetable. Prize: Eternal glory and a bag of carrots." },
    { id: 6, text: "Did anyone lose a time machine? Found one parked outside. It's set to 1985. Also, it's a DeLorean!" },
    { id: 7, text: "Important: If you're reading this message, you're awesome. Keep being awesome. That is all." },
    { id: 8, text: "Spoiler alert! Friday's lunch menu: Magic beans and fairy dust sandwiches. Side of unicorn tears for dipping." },
    { id: 9, text: "Breaking News: Coffee has been declared the official drink of Mondays. All other beverages, please step aside." },
    { id: 10, text: "Alert: The office plant is on vacation next week. Plant-sitter needed. Must be fluent in photosynthesis." }
  ];
  

  // Toggle the display of announcements
  const toggleAnnouncements = () => {
    setShowAnnouncements(!showAnnouncements);
  };

  return (
    <div className="bg-gray-100 h-screen">
      {/* Top bar */}
      <div className="bg-white p-4 flex items-center justify-between border-b">
        <div className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}

          <Image width={400} height={400} src="https://images.unsplash.com/photo-1682685794761-c8e7b2347702?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Kindred" className="h-10 w-10 rounded-full" />
          <span className="text-lg font-semibold ml-3">Kindred Europe (Member...)</span>
        </div>
        <div>
          <StarIcon className="h-6 w-6 text-gray-600" />
        </div>
      </div>

      {/* Conditional Rendering for Main View and Announcements */}
      {!showAnnouncements ? (
        <>
          {/* Announcements section */}
          <div className="p-4">
            <h2 className="font-semibold text-lg mb-2">Announcements</h2>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">~Nikki✨ added the group "🎵 Music I...</span>
                <StarIcon className="h-5 w-5 text-gray-500" />
              </div>
            </div>
          </div>

          {/* Groups section */}
          <div className="p-4">
            <h2 className="font-semibold text-lg mb-2">Groups you're in</h2>
            
            {/* All Over Europe Kindred Group */}
            <div className="bg-white p-4 rounded-lg shadow mb-3 flex items-center justify-between cursor-pointer" onClick={toggleAnnouncements}>
              <div className="flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}

                <Image width={400} height={400} src="https://pbs.twimg.com/profile_images/997845495790874625/XoSQza66_400x400.jpg" alt="Group" className="h-10 w-10 rounded-full" />
                <span className="text-sm font-medium ml-3">Jamal Life</span>
              </div>
              <StarIcon className="h-5 w-5 text-gray-500" />
            </div>

            {/* ... other groups ... */}
          </div>

          {/* Add group button */}
          <div className="fixed bottom-4 right-4">
            <button className="bg-blue-500 text-white p-3 rounded-full shadow-lg">
              <StarIcon className="h-6 w-6" />
            </button>
          </div>
        </>
      ) : (
        // Announcement Messages View
        <div className="fixed inset-0 bg-white p-4">
  <div className="flex flex-col h-full">
    <div className="flex items-center justify-between border-b pb-3">
      <button onClick={toggleAnnouncements} className="flex items-center">
        <ArrowLeftIcon className="h-6 w-6 mr-2" />
        Back
      </button>
      <h2 className="text-lg font-semibold">Announcements</h2>
      <div></div> {/* For alignment purpose */}
    </div>
    <div className="overflow-y-auto mt-4">
      {announcements.map(announcement => (
        <div key={announcement.id} className="flex items-start mb-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}

          <Image width={400} height={400} src="https://pbs.twimg.com/profile_images/997845495790874625/XoSQza66_400x400.jpg" alt="Sender" className="h-10 w-10 rounded-full mr-3" />
          <div className="flex flex-col">
            <span className="text-sm font-medium">Jamal Walker</span>
            <div className="bg-gray-100 p-3 rounded">
              <p>{announcement.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      )}
      <BottomNavBar></BottomNavBar>
    </div>
  );
};

export default Messages;
