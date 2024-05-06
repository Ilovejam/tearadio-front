import React from 'react';
import IdCardStaff from '../components/IdCardStaff';
import Navbar from '../components/Navbar';

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Navbar />
      <div className="mt-10">
        <IdCardStaff
          membershipNumber="RS11011"
          memberName="Renee Stephens"
          memberSinceDate="Jan 1, 2024"
        />
      </div>
    </div>
  );
};

export default Page;
