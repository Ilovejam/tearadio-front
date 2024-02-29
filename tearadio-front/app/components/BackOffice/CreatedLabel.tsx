import React from 'react';
import Image from 'next/image';
const CreatedLabel = () => {
  return (
    <div className="flex overflow-x-auto gap-4">
      {/* İlk Card */}
      <div className="card w-64 h-full bg-base-100 shadow-xl min-">
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}

          <Image width={400} height={400} src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-solid">Follow</button>
          </div>
        </div>
      </div>

      {/* İkinci Card */}
      <div className="card w-64 h-full bg-base-100 shadow-xl ">
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}

          <Image width={400} height={400} src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">More Shoes!</h2>
          <p>Find your perfect pair of shoes.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-solid">Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatedLabel;
