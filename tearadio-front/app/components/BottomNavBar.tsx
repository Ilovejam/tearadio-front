import React from 'react';
import { HomeIcon, StarIcon, BellIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const BottomNavBar = () => {
  return (
    <div className="fixed inset-x-0  bottom-0 bg-white border-t-2 border-gray-200">
      <div className="flex justify-between items-center max-w-md mx-auto p-4">
        <Link href='/personal'>
          <button className="flex flex-col items-center">
            <HomeIcon className="h-6 w-6"/>
            <span className="text-xs">Dashboard</span>
          </button>
        </Link>
        <Link href='/backoffice'>
          <button className="flex flex-col items-center">
            <StarIcon className="h-6 w-6"/>
            <span className="text-xs">Backoffice</span>
          </button>
        </Link>
        <Link href='/messages'>
          <button className="flex flex-col items-center">
            <BellIcon className="h-6 w-6"/>
            <span className="text-xs">Messages</span>
          </button>
        </Link>
        <button className="flex flex-col items-center">
          <UserIcon className="h-6 w-6"/>
          <span className="text-xs">Campaign</span>
        </button>
      </div>
    </div>
  )
}

export default BottomNavBar;
