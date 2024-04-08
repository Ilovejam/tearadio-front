
"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline'; // Make sure you have heroicons installed
import { MicrophoneIcon } from '@heroicons/react/24/outline';


const settingsOptions = [
  {
    title: 'Preferences',
    options: [
      { icon: '🔒', name: 'Security Preferences' },
      { icon: '⚙️', name: 'Manage Data' },
    ],
  },
  {
    title: 'Resources',
    options: [
      { icon: '📚', name: 'User Guides' },
      { icon: '❓', name: 'FAQs' },
      { icon: '🔏', name: 'Privacy Policy' },
      { icon: '🛄', name: 'Baggage Information' },
    ],
  },
  {
    title: 'Other',
    options: [
      { icon: '📞', name: 'Customer Support' },
      { icon: '🔗', name: 'Share the App' },
      { icon: '⭐', name: 'Rate the App' },
    ],
  },
];

const Settings = () => {
    

  return (
    <div className="container mx-auto p-4 bg-white">
        <div className="mb-4 flex items-center justify-between">
                <Link href="/">
                    <ArrowLeftIcon className="h-6 w-6 text-black" />
                </Link>
                <h1 className="text-2xl font-bold">Settings</h1>
                <div className="h-6 w-6"> {/* This is a spacer */}</div>
            </div>
            
            <div className="mt-4 relative rounded-3xl shadow-sm">
            <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
</label>
            </div>


      
        <div className="divide-y divide-gray-200">
  {settingsOptions.map((section) => (
    <div key={section.title} className="py-4">
      <p className="font-semibold text-lg mb-2">{section.title}</p>
      <div className="space-y-2">
        {section.options.map((option) => {
          // "Share the App" seçeneği için tüm kartı bir link olarak işlevlendir
          if (option.name === 'Share the App') {
            return (
              <Link href="/invite" key={option.name}>
  <div className="flex items-center justify-between p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer">
    <div className="flex items-center">
      <span className="text-2xl mr-2">{option.icon}</span>
      <span>{option.name}</span>
    </div>
    <span className="text-2xl">›</span>
  </div>
</Link>

            );
          }

          // Diğer seçenekler için genel kart görünümü
          return (
            <div
              key={option.name}
              className="flex items-center justify-between p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer"
            >
              <div className="flex items-center">
                <span className="text-2xl mr-2">{option.icon}</span>
                <span>{option.name}</span>
              </div>
              <span className="text-2xl">›</span>
            </div>
          );
        })}
      </div>
    </div>
  ))}
</div>

      <button className="w-full py-3 bg-red-600 text-white rounded-lg mt-4 shadow-lg hover:bg-red-700 transition-colors duration-200 ease-in-out">
        Log Out
      </button>
    </div>
  );
};

export default Settings;
