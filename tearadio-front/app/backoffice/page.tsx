import React from 'react';
import FeaturedGroupCard from '../components/BackOffice/FeaturedGroupCard';
import BottomNavBar from '../components/BottomNavBar';
import CreatedLabel from '../components/BackOffice/CreatedLabel';
import Navbar from '../components/Navbar';
import WhatYouShouldKnow from '../components/BackOffice/WhatYouShouldKnow';
import Utilities from '../components/BackOffice/Utilities';
import FilterFormApplication from '../components/BackOffice/FilterFormApplication';
const Backoffice = () => {
  
  return (
    <div className="bg-gray-100 min-h-screen w-full">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      {/* Main Content with Padding for Navbar and BottomNavBar */}
      <div className="pt-16 pb-20 m-10"> {/* Adjust these padding values based on the height of your Navbar and BottomNavBar */}
        <div className="text-center p-4">
          <h1 className="text-4xl font-bold">Backoffice</h1>
          <p className="text-lg text-gray-600">Discover your Audience</p>
        </div>

        {/* Featured Groups Section */}
        <h3 className="text-2xl font-bold">Featured Items</h3>

        <FeaturedGroupCard />
        <h3 className="text-2xl font-bold mb-5">Selected Labels</h3>

          <CreatedLabel />
          <h3 className="text-2xl font-bold mb-5 mt-5">What You Should Know?</h3>

        <WhatYouShouldKnow />
        <div className='divider'></div>
        <h3 className="text-2xl font-bold mb-5">Filter From Application</h3>
        <FilterFormApplication />
        <div className="divider"></div>
        <h3 className="text-2xl font-bold mb-5">Utilities</h3>
        <Utilities />

      </div>
      
      <div className="fixed bottom-10 left-0 w-full z-10">
        <BottomNavBar />
      </div>
    </div>
  );
};

export default Backoffice;
