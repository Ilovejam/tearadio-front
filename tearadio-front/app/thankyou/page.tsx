import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'; 
import Link from 'next/link';

const ThankYou = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <CheckCircleIcon className="w-16 h-16 text-black mb-4" />
      <h1 className="text-2xl font-bold mb-2">Thank You</h1>
      <p className="mb-8 text-gray-600">Your request has been sent for approval.</p>
      <button className="bg-black text-white text-sm px-6 py-3 rounded-full shadow hover:bg-gray-800 focus:outline-none focus:shadow-outline">
        <Link href="/">
            Back to home
        </Link>
      </button>
    </div>
  )
}

export default ThankYou
