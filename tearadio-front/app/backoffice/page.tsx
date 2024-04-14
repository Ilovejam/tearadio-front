import React from 'react';
import FeaturedGroupCard from '../components/BackOffice/FeaturedGroupCard';
import BottomNavBar from '../components/BottomNavBar';
import CreatedLabel from '../components/BackOffice/CreatedLabel';
import Navbar from '../components/Navbar';
import WhatYouShouldKnow from '../components/BackOffice/WhatYouShouldKnow';
import Utilities from '../components/BackOffice/Utilities';
import FilterFormApplication from '../components/BackOffice/FilterFormApplication';
import CardsSlider from '../components/BackOffice/CardsSlider';
const Backoffice = () => {
  const cardsData = Array.from({ length: 10 }, (_, index) => ({
    title: `Card ${index + 1}`,
    subtitle: "Subtitle",
    imageUrl: `https://via.placeholder.com/150?text=Card+${index + 1}`
  }));
  
  

  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <div className="fixed top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      <div className="container mx-auto pt-16 pb-20 m-10">
        <div className="text-center p-4">
          <h1 className="text-4xl font-bold">Backoffice</h1>
          <p className="text-lg text-gray-600">Discover your Audience</p>
        </div>
        <div className="bg-gray-100 min-h-screen">
      <CardsSlider cards={cardsData} />
      {/* ... other components */}
    </div>
   
        

        <div className="divider"></div>
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
