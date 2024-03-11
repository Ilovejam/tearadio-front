import React from 'react'
import IdCardMember from '../components/IdCardMember'
import NavbarMember from '../components/NavbarMember'

const page = () => {
  return (
    <div className='mt-20'>
      <NavbarMember></NavbarMember>
      <IdCardMember
            membershipNumber="NW89213"
            memberName="Natalie Walker"
            memberSinceDate="Jan 1, 2024"
            qrCodeUrl="https://iili.io/JMZgdrl.png" 
            freedrink='Free Drink 3/4'

        />

    </div>
  )
}

export default page
