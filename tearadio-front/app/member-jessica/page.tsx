import React from 'react'
import IdCardMember from '../components/IdCardMember'
import Navbar from '../components/Navbar'
const page = () => {
  return (
    <div className='mt-10'>
      <IdCardMember
            membershipNumber="JP10111"
            memberName="Jessica Porter"
            memberSinceDate="Jan 1, 2024"
            qrCodeUrl="https://i.ibb.co/Ch7rp0f/freddie.png" // Özel QR kodu URL'nizi buraya ekleyin
        />

    </div>
  )
}

export default page
