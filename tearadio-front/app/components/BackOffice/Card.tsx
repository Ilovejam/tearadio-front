import React from 'react'

const Card = ({ imageUrl, title, subtitle }) => (
    <div className=" rounded-lg shadow overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h5 className="text-lg font-semibold">{title}</h5>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
  

export default Card
