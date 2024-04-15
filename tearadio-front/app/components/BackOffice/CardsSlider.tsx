import React, { useRef } from 'react';
import Card from './Card';

const CardsSlider = ({ cards }: { cards: any[] }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  // Touch hareketlerini yakalayacak ve yatay kaydırmayı sağlayacak fonksiyon
  const handleDrag = (e: React.UIEvent<HTMLDivElement>) => {
    // Kaydırma hareketi burada tanımlanacak
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">Featured Groups</h3>
        <span className="text-blue-600 text-sm cursor-pointer">See All</span>
      </div>
      <div ref={sliderRef} onScroll={handleDrag} className="flex overflow-x-auto snap-x snap-mandatory touch-pan-x space-x-4">
        {cards.map((card, index) => (
          <div key={index} className="snap-center shrink-0 first:pl-4 last:pr-4">
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsSlider;
