import React from 'react'
import Image from 'next/image'
const WhatYouShouldKnow = () => {
  return (
    <div className="flex">
    {/* İlk Kart */}
    <div className="max-w-xs mx-5">
      {/* eslint-disable-next-line @next/next/no-img-element */}

        <Image width={400} height={400} alt='asd' src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="rounded-lg shadow-2xl w-full" />

        <p className="py-6">Provident cupiditate</p>
    </div>

    {/* İkinci Kart */}
    <div className="max-w-xs mx-5">
      {/* eslint-disable-next-line @next/next/no-img-element */}

        <Image width={400} height={400} alt='asd2' src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="rounded-lg shadow-2xl w-full" />
        <p className="py-6">Provident cupiditate</p>
    </div>
    

    
</div>


  )
}

export default WhatYouShouldKnow
