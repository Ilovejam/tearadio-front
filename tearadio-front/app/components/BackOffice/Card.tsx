import React from 'react'
import Image from 'next/image';

const Card = ({ imageUrl, title, subtitle }: { imageUrl: string, title: string, subtitle: string }) => (
  <div className=" rounded-lg shadow overflow-hidden">
<Image src={imageUrl} alt={title} height={48} />
      <div className="p-4">
        <h5 className="text-lg font-semibold">{title}</h5>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
  

export default Card
