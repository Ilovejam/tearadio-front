// components/Navbar.tsx

"use client";

import React, { useState } from 'react';
import { BellIcon, CogIcon, QrCodeIcon,  UserGroupIcon } from '@heroicons/react/24/outline'; // Bell ve Cog ikonlarını ekliyorum
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <nav className=" fixed w-full top-0 left-0 z-0 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Sol taraftaki QR ikonu */}
          <Link href='/'>
            <Image 
              src="https://pbs.twimg.com/profile_images/610939586571825152/8JWXGIFM_400x400.jpg" 
              alt="Logo"
              className="h-10 w-10 object-cover rounded-full cursor-pointer" 
              width={400}
              height={400}
            />
          </Link>
          {/* Sağ taraftaki ikonlar */}
          <div className="flex items-center">
            <Link href='/personal'>
              <UserGroupIcon className="h-6 w-6 text-black cursor-pointer mx-2" />

            </Link>
          <Link href='/staff'>  
            <QrCodeIcon className="h-6 w-6 text-black cursor-pointer mx-2" />
          </Link>
            <Link href="/notifications">
              <BellIcon className="h-6 w-6 text-black cursor-pointer mx-2" />

            </Link>

            <Link href="/settings">
              
                <CogIcon className="h-6 w-6 text-black cursor-pointer mx-2" />
              
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
