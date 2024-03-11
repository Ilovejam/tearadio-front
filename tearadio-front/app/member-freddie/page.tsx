import React from 'react'
import IdCardMember from '../components/IdCardMember'
import Navbar from '../components/Navbar'
const page = () => {
  return (
    <div className='mt-20'>
      <IdCardMember
            membershipNumber="FB12344"
            memberName="Freddie Brown"
            memberSinceDate="Jan 1, 2024"
            qrCodeUrl="https://iili.io/JMZUgzg.png" 
            freedrink='Free Drink 0/4'
        />

    </div>
  )
}

export default page
