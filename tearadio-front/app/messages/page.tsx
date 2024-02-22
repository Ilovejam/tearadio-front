import React from 'react';
import { HeartIcon, ShareIcon, EyeIcon } from '@heroicons/react/24/outline';
import Navbar from '../components/Navbar';
import Image from 'next/image';

const Messages = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar/>
      <div className="border-gray-200 border-2 rounded-lg max-w-md mx-auto my-16">
      
        

        <div className="bg-gray-100 p-4 rounded-lg">
            {/* Header with profile picture and welcome message */}
            <div className="flex items-center">
                <Image
                className="rounded-full h-12 w-12 object-cover mr-3"
                src="https://pbs.twimg.com/profile_images/610939586571825152/8JWXGIFM_400x400.jpg" 
                alt="Profile"
                width={400}
                height={400}
                />
                <div>
                <p className="text-sm font-semibold">Park 14 Team</p>
                <p className="text-xs text-gray-500">New team member!</p>
                </div>
            </div>

            {/* Post content */}
            <div className="flex items-center space-x-4">
    <div className="flex-shrink-0">
      <Image className="h-20 w-20 object-cover rounded-lg" src="/profile.jpg" alt="Profile" width={400}
                height={400}/>
    </div>
    <div className="flex-1">
    <p className="text-gray-900 font-semibold">
  We&apos;re thrilled to announce that Erica has joined the Park14 Team! Her passion, skill, and creativity will be invaluable to our projects. Let&apos;s give her a warm welcome! 🌟 #NewMember #TeamGrowth
</p>

    </div>
  </div>


            {/* Reactions and Share */}
            <div className="flex items-center text-sm mt-4">
                <HeartIcon className="h-6 w-6 text-red-500" />
                <span className="ml-1">12k</span>
                <ShareIcon className="h-6 w-6 text-gray-500 ml-4" />
                <span className="ml-1">687</span>
                <ShareIcon className="h-6 w-6 text-gray-500 ml-4" />
                <span className="ml-1">211</span>
            </div>

            {/* Timestamp */}
            <p className="text-xs text-gray-500 mt-2">MON 2:41 AM</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-b-lg flex items-center text-sm text-gray-500">
          <EyeIcon className="h-6 w-6 text-gray-500" />
          <span className="ml-1">Seen by 502.4k</span>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
            {/* Header with profile picture and welcome message */}
            <div className="flex items-center">
                <Image
                className="rounded-full h-12 w-12 object-cover mr-3"
                src="https://pbs.twimg.com/profile_images/610939586571825152/8JWXGIFM_400x400.jpg" 
                alt="Profile"
                width={400}
                height={400}
                />
                <div>
                <p className="text-sm font-semibold">Park 14 Team</p>
                <p className="text-xs text-gray-500">New team member!</p>
                </div>
            </div>

            {/* Post content */}
            <div className="flex items-center space-x-4">
    <div className="flex-shrink-0">
      <Image className="h-20 w-20 object-cover rounded-lg" src="/profile.jpg" alt="Profile" width={400}
                height={400}/>
    </div>
    <div className="flex-1">
    <p className="text-gray-900 font-semibold">
  We&apos;re thrilled to announce that Erica has joined the Park14 Team! Her passion, skill, and creativity will be invaluable to our projects. Let&apos;s give her a warm welcome! 🌟 #NewMember #TeamGrowth
</p>

    </div>
  </div>


            {/* Reactions and Share */}
            <div className="flex items-center text-sm mt-4">
                <HeartIcon className="h-6 w-6 text-red-500" />
                <span className="ml-1">12k</span>
                <ShareIcon className="h-6 w-6 text-gray-500 ml-4" />
                <span className="ml-1">687</span>
                <ShareIcon className="h-6 w-6 text-gray-500 ml-4" />
                <span className="ml-1">211</span>
            </div>

            {/* Timestamp */}
            <p className="text-xs text-gray-500 mt-2">MON 2:41 AM</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-b-lg flex items-center text-sm text-gray-500">
          <EyeIcon className="h-6 w-6 text-gray-500" />
          <span className="ml-1">Seen by 502.4k</span>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
            {/* Header with profile picture and welcome message */}
            <div className="flex items-center">
                <Image
                className="rounded-full h-12 w-12 object-cover mr-3"
                src="https://pbs.twimg.com/profile_images/610939586571825152/8JWXGIFM_400x400.jpg" 
                alt="Profile"
                width={400}
                height={400}
                />
                <div>
                <p className="text-sm font-semibold">Park 14 Team</p>
                <p className="text-xs text-gray-500">New team member!</p>
                </div>
            </div>

            {/* Post content */}
            <div className="flex items-center space-x-4">
    <div className="flex-shrink-0">
      <Image className="h-20 w-20 object-cover rounded-lg" src="/profile.jpg" alt="Profile" width={400}
                height={400}/>
    </div>
    <div className="flex-1">
    <p className="text-gray-900 font-semibold">
  We&apos;re thrilled to announce that Erica has joined the Park14 Team! Her passion, skill, and creativity will be invaluable to our projects. Let&apos;s give her a warm welcome! 🌟 #NewMember #TeamGrowth
</p>

    </div>
  </div>


            {/* Reactions and Share */}
            <div className="flex items-center text-sm mt-4">
                <HeartIcon className="h-6 w-6 text-red-500" />
                <span className="ml-1">12k</span>
                <ShareIcon className="h-6 w-6 text-gray-500 ml-4" />
                <span className="ml-1">687</span>
                <ShareIcon className="h-6 w-6 text-gray-500 ml-4" />
                <span className="ml-1">211</span>
            </div>

            {/* Timestamp */}
            <p className="text-xs text-gray-500 mt-2">MON 2:41 AM</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-b-lg flex items-center text-sm text-gray-500">
          <EyeIcon className="h-6 w-6 text-gray-500" />
          <span className="ml-1">Seen by 502.4k</span>
        </div>
      </div>
    </div>
  );
};

export default Messages;
