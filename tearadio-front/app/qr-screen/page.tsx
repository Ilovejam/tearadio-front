import React from 'react';
import Navbar from '../components/Navbar';
import BottomNavBar from '../components/BottomNavBar';
import IdCardMember from '../components/IdCardMember';
import IdCardStaff from '../components/IdCardStaff';

const page = () => {
  return (
    <div>
      <Navbar />
      {/* Flex container to center and display cards side by side on larger screens, and stack them on smaller screens */}
      <div className="flex flex-col sm:flex-row justify-center gap-5 mt-20">
        <div>
          {/* Title for Member Card */}
          <div className="text-3xl text-center mb-2">Member Card</div>
          <IdCardMember
            membershipNumber="FB12344"
            memberName="Freddie Brown"
            memberSinceDate="Jan 1, 2024"
          />
        </div>
        
      </div>
      <BottomNavBar />
    </div>
  );
}

export default page;
