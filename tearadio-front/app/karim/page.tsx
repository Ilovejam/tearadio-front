import React from 'react'
import IdCardStaff from '../components/IdCardStaff';
import Navbar from '../components/Navbar';
const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      
        <Navbar />

    
    <IdCardStaff
          membershipNumber="KS12011"
          memberName="Karim Shehata"
          memberSinceDate="Jan 1, 2024"
        />


  </div>
  )
}

export default page