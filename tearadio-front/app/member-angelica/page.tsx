import React from 'react'
import IdCardMember from '../components/IdCardMember'
import Navbar from '../components/Navbar'
const page = () => {
  return (
    <div className='mt-20'>
      <IdCardMember
            membershipNumber="AW23122"
            memberName="Angelica Wesley"
            memberSinceDate="Mar 1, 2024"
            qrCodeUrl="https://iili.io/JMZgzEx.png" 
            freedrink='Free Drink 2/4'

        />

    </div>
  )
}

export default page
