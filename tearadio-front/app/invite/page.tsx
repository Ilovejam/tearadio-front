"use client";

import React, { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

const Invite = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [notes, setNotes] = useState('');

  const handleInvite = async (e:any) => {
    e.preventDefault(); // Formun varsayılan gönderim işlemini engeller.
  
    try {
      const response = await fetch('http://localhost:3000/send-sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: phoneNumber, // "to" yerine "phone" kullan
          name: fullName, // "fullName" yerine "name" kullan
          notes: notes, // "notes" bilgisini de gönder
        }),
      });
  
      if (!response.ok) throw new Error('SMS gönderimi başarısız.');
  
      console.log('Gönderildi');
      // Başarılı gönderim sonrası işlemler
    } catch (error) {
      console.error('Hata:', error);
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="self-start">
        <Link href='/'>
          <Image 
            src="https://pbs.twimg.com/profile_images/610939586571825152/8JWXGIFM_400x400.jpg" 
            alt="Logo"
            className="object-cover rounded-full cursor-pointer" 
            width={80}
            height={80}
          />
        </Link>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg max-w-5xl w-full max-h-5xl">
        <div className="flex justify-between items-center mb-6">
          <span className="text-2xl font-bold">invite new member!</span>
          <PaperAirplaneIcon className="h-6 w-6 text-gray-800 rotate-90 transform" />
        </div>
        
        <form className="space-y-4" onSubmit={handleInvite}>
          <div>
            <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="text" id="phone-number" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="(202) - 123-1234" />
          </div>

        

          <div>
            <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" id="full-name" onChange={(e) => setFullName(e.target.value)} value={fullName} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="First, Last" />
          </div>

          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes</label>
            <textarea id="notes" rows={3} onChange={(e) => setNotes(e.target.value)} value={notes} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="Share any important feedback."></textarea>
          </div>

          <div>
            <button 
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Invite!
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Invite;
