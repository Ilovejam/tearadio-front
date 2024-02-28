"use client";

import React from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
const Invite = () => {
    

  const handleInvite = () => {
    console.log('Gönderildi');
  };


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
        <div className="self-start">
        <Link href='/'>
        <Image 
    src="https://pbs.twimg.com/profile_images/610939586571825152/8JWXGIFM_400x400.jpg" 
    alt="Logo"
    className="object-cover rounded-full cursor-pointer" 
    width={80} // Increase width as needed
    height={80} // Increase height as needed
  /></Link>
</div>

        <div className="bg-white p-6 rounded-lg shadow-lg max-w-5xl w-full max-h-5xl">
        
        <div className="flex justify-between items-center mb-6">
         
          <span className="text-2xl font-bold">invite new member!</span>
          <button>
            <PaperAirplaneIcon className="h-6 w-6 text-gray-800 rotate-90 transform" />
          </button>
          <span className="h-6 w-6"></span> {/* spacer */}
        </div>
        
        <form className="space-y-4">
          <div>
            <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="text" id="phone-number" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="(202) - 123-1234" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="example@gmail.com" />
          </div>

          <div>
            <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" id="full-name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="First, Last" />
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
            <input
  className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-gray-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-white after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-black checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-white checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-black checked:focus:bg-black checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_black] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-black dark:checked:after:bg-white dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_black]"
  type="checkbox"
  role="switch"
  id="flexSwitchChecked"
  defaultChecked
/>

            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="pre-approved" className="font-medium text-gray-700">Pre-Approved?</label>
              <p className="text-gray-500">This person is a representation of me.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
            <input
  className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-gray-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-white after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-black checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-white checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-black checked:focus:bg-black checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_black] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-black dark:checked:after:bg-white dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_black]"
  type="checkbox"
  role="switch"
  id="flexSwitchChecked"
  defaultChecked
/>
            </div>
            
            <div className="ml-3 text-sm">
              <label htmlFor="discounted" className="font-medium text-gray-700">Discounted?</label>
              <p className="text-gray-500">They should look for this type of membership.</p>
            </div>
          </div>

          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes</label>
            <textarea id="notes" rows={3} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="Share any important feedback."></textarea>
          </div>
          <div>
          <Link href="/thankyou" passHref>
    <button 
      type="button" // Burada 'submit' yerine 'button' kullanıldığını unutmayın
      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Invite!
    </button>
  </Link>
          </div>
          </form>
          </div>
          </div>


  )
}

export default Invite