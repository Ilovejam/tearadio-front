"use client";

import { useEffect, useState } from 'react';
import React from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Invite = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [notes, setNotes] = useState('');
  
  const router = useRouter()

  const [isPreApproved, setIsPreApproved] = useState(false);
  const [isDiscounted, setIsDiscounted] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  const handleInvite = async (e:any) => {
    e.preventDefault(); // Formun varsayılan gönderim işlemini engeller.
  
    try {
      const response = await fetch('https://tearadio-backend.vercel.app/send-sms', {
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
      router.push('/thankyou');

    } catch (error) {
      console.error('Hata:', error);
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-auto">
        {/* ... */}
        <form className="space-y-6" onSubmit={handleInvite}>
          <div className="space-y-2">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="First"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                />
          </div>
          <div className="space-y-2">
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Last"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </div>
          <div className="space-y-2">
            {/* Phone Number Input */}
            <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
              Add Phone
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">
                  +1
                </span>
              </div>
              <input
                type="text"
                name="phone-number"
                id="phone-number"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:text-sm border-gray-300 rounded-md"
                placeholder="(202) - 123-1234"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
              />
            </div>
          </div>

          <div className="space-y-2">
            {/* Email Input */}
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Add Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="space-y-2">
            {/* Toggle for Pre-approved */}
            <label htmlFor="pre-approved" className="flex items-center">
              <input
                type="checkbox"
                name="pre-approved"
                id="pre-approved"
                className="focus:ring-indigo-500 focus:border-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                checked={isPreApproved}
                onChange={(e) => setIsPreApproved(e.target.checked)}
              />
              <span className="ml-2 text-sm font-medium text-gray-700">
                Pre approved
              </span>
            </label>
          </div>

          <div className="space-y-2">
            {/* Toggle for Discounted */}
            <label htmlFor="discounted" className="flex items-center">
              <input
                type="checkbox"
                name="discounted"
                id="discounted"
                className="focus:ring-indigo-500 focus:border-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                checked={isDiscounted}
                onChange={(e) => setIsDiscounted(e.target.checked)}
              />
              <span className="ml-2 text-sm font-medium text-gray-700">
                Discounted?
              </span>
            </label>
          </div>

          <div className="space-y-2">
            {/* Notes Input */}
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
              placeholder="Type here..."
              onChange={(e) => setNotes(e.target.value)}
              value={notes}
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Invite Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}



export default Invite;
