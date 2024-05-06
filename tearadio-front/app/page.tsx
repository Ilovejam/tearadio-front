"use client";
import React, { useState } from 'react';
import Image from "next/image";
import { Link } from 'react-router-dom';


export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
 <div className="relative"> {/* Make navbar and hero part of the same relative container */}
        {/* Navbar */}
        <nav className="bg-base-100 bg-opacity-90 backdrop-filter backdrop-blur-lg"> {/* Semi-transparent navbar */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                </div>
                <div className="flex items-center space-x-4">
  <img src="https://framerusercontent.com/images/3uUfO6U78aYsU7W21Kop9HdU1E.png" alt="Description of image" className="w-12 h-auto" />
  <p className='text-2xl font-bold '>Tea Radio</p>
</div>
              </div>
              <div className="flex items-center">
                <a href="https://h40mgktic6j.typeform.com/to/I9WCyrRF?typeform-source=tearadio.co" className="btn btn-neutral" target="_blank">Join Waitlist</a>

              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section with Background Image */}
        <div className="hero min-h-screen" style={{ backgroundImage: `url('https://i.ibb.co/pvvTWqK/Background.png')`, backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '64px' }}>
          <div className="hero-content flex-col lg:flex-row-reverse items-center">
            <img src="https://i.ibb.co/5GkSNmv/Group-4.png" alt="Membership Software" className="max-w-sm rounded-lg " />
            <div>
              <h1 className="text-5xl font-bold">Membership Software to manage loyal customers</h1>
              <p className="py-6">We help retail businesses launch their Membership Programs, essentially adopting a subscription model.</p>
              <a href="https://calendly.com/tearadio" className="btn btn-neutral" target="_blank">Schedule Demo</a>
              <a href="https://park14.tearadio.co/" className="btn ml-10" target="_blank">Test Product</a>
            </div>
          </div>
        </div>
      </div>


<div className=" min-h-screen mb-[-100px]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <p className="py-6">
      Tea Radio is an AI-powered membership tool for membership sign-ups, digital member cards, and direct notifications, bypassing the clutter of emails and texts. <br /> <br />
      Our customized system manages a subscription model without any administrative burden, replacing the typical roles needed to effectively manage a membership community:
    </p>
    <div className="lg:text-left w-full">
      <h1 className="text-6xl font-bold">What we do</h1>  {/* Increased font size from text-5xl to text-8xl */}
    </div>
  </div>
</div>
<div className="flex justify-between p-5 gap-10 mt-[-70px] lg:mt-[-300px]">  {/* Adjust top margin based on the screen size */}
<div className="flex flex-col space-y-4">
  <div className="bg-white p-5  flex flex-col items-center text-center border border-gray">
    <img src="https://framerusercontent.com/images/HfKIg8KFJkpVdk3E0bp4odJQ7Q.png" alt="" className="w-20 h-20 mb-4 "/> {/* Size reduced to w-20 h-20 and margin-bottom added */}

    <h2 className="text-lg font-bold mb-2 text-blue-800">Subscription Director</h2>
    <p>Tea Radio looks after all the subscription details, like signing up new members, updating their information, and making sure payments go through every month.</p>
  </div>
  <div className="bg-white p-5  flex flex-col items-center text-center border border-gray">
    <img src="https://framerusercontent.com/images/nSNADcFvgV36wkx1raBI51IjTc.png" alt="" className="w-20 h-20 mb-4"/> {/* Size reduced to w-20 h-20 and margin-bottom added */}

    <h2 className="text-lg font-bold mb-2 text-blue-800">Customer Service</h2>
    <p>Tea Radio's AI can answers questions, solve problems, and keeps customers happy. We also help sales associates upsell clients based on previous purchases.</p>
  </div>
</div>


<div className="flex flex-col space-y-10 w-4/5">  {/* Increased column width from w-1/3 to w-2/5 */}
  <a href="https://tearadiostaff.vercel.app/personal" target="_blank" rel="noopener noreferrer">
    <img src="https://i.ibb.co/KN3rZNb/Ekran-g-r-nt-s-2024-05-05-163316.png" alt="Active Members" className="w-full h-full" style={{ maxHeight: '600px' }}/>  {/* Adjusted image to fill width and provided a max height */}
  </a>
</div>


<div className="flex flex-col space-y-4">
  <div className="bg-white p-5 flex flex-col items-center text-center border border-gray">
    <img src="https://framerusercontent.com/images/rVVqedw4fYgRMWnmq1eQYvrCIFM.png" alt="" className="w-20 h-20 mb-4"/> {/* Size reduced to w-20 h-20 and margin-bottom added */}

    <h2 className="text-lg font-bold mb-2 text-blue-800">Marketing Specialist</h2>
    <p>Tea Radio bypasses ads, social media, and email campaigns to  ping loyal customers with secure end-to-end encryption.</p>
  </div>
  <div className="bg-white p-5  flex flex-col items-center text-center border border-gray">
    <img src="https://framerusercontent.com/images/Jz5zKQqjugEdkXUfFrnasnkQo.png" alt="" className="w-20 h-20 mb-4"/> {/* Size reduced to w-20 h-20 and margin-bottom added */}

    <h2 className="text-lg font-bold mb-2 text-blue-800">Customer Service</h2>
    <p>Tea Radio digs through all the customer data to find patterns and insights, helping the business understand what your top 10% enjoy and how to serve them better.</p>
  </div>
</div>
</div>
<div className=" min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <p className="py-6">
    Our  software equips cashiers with relevant data to upsell, manages memberships, and simplifies customer service for brick & mortar shops that sell food, alcohol or cannabis:
    </p>
    <div className="lg:text-left w-full">
      <h1 className="text-6xl font-bold">Our Clients</h1>  {/* Increased font size from text-5xl to text-8xl */}
    </div>
  </div>
</div>
<div className="grid grid-cols-3 gap-4 mt-[-70px] lg:mt-[-500px]">
  {/* Three cards in the first row */}
  <div className="card w-96 h-auto min-h-[500px] bg-base-100 shadow-xl image-full flex flex-col justify-between">
    <figure className="flex-shrink-0 w-full overflow-hidden">
      
      <img src="https://cdn.sortiraparis.com/images/80/100789/834071-too-restaurant-too-hotel-paris-photos-menu-entrees.jpg" alt="Restaurants" className="w-full h-full object-cover" />
    </figure>
    <div className="card-body mt-auto">
      <h2 className="card-title text-4xl">Restaurants</h2>
      <p className="text-2xl">Food Resellers</p>
      <p className="tracking-widest text-2XL">LEARN MORE</p>
    </div>
  </div>

  <div className="card w-96 h-auto min-h-[500px] bg-base-100 shadow-xl image-full flex flex-col justify-between">
    <figure className="flex-shrink-0 w-full overflow-hidden">
      <img src="https://www.freep.com/gcdn/-mm-/45685a2c4fdc7a2809603a95f433694024935143/c=0-56-2394-1409/local/-/media/2017/09/08/DetroitFreeP/DetroitFreePress/636404916081767969-inside-Weed-090817-rb-005.jpg" alt="Dispensaries" className="w-full h-full object-cover" />
    </figure>
    <div className="card-body mt-auto">
      <h2 className="card-title text-4xl">Dispensaries</h2>
      <p className="text-2xl">Cannabis Resellers</p>
      <p className="tracking-widest text-2XL">LEARN MORE</p>
    </div>
  </div>

  <div className="card w-96 h-auto min-h-[500px] bg-base-100 shadow-xl image-full flex flex-col justify-between">
    <figure className="flex-shrink-0 w-full overflow-hidden">
      <img src="https://assets.vogue.in/photos/637772b9aea31dc4edb48c0d/2:3/w_2560%2Cc_limit/kayan.JPG" alt="Social Clubs" className="w-full h-full object-cover" />
    </figure>
    <div className="card-body mt-auto">
      <h2 className="card-title text-4xl">Social Clubs</h2>
      <p className="text-2xl">Alcohol Resellers (Ex. Soho House)</p>
      <p className="tracking-widest text-2XL">LEARN MORE</p>
    </div>
  </div>

  {/* Fourth card centered on the second row */}
  <div className="card w-96 h-auto min-h-[500px] bg-base-100 shadow-xl image-full flex flex-col justify-between col-start-2">
    <figure className="flex-shrink-0 w-full overflow-hidden">
      <img src="https://cdn.sortiraparis.com/images/80/100789/834071-too-restaurant-too-hotel-paris-photos-menu-entrees.jpg" alt="Music Venues" className="w-full h-full object-cover" />
    </figure>
    <div className="card-body mt-auto">
      <h2 className="card-title text-4xl">Music Venues</h2>
      <p className="text-2xl">Concerts, Clubs & Events</p>
      <p className="tracking-widest text-2XL">LEARN MORE</p>
    </div>
  </div>
</div>


<div className="flex items-center justify-center w-full min-h-screen bg-green-100 mt-10">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Pricing</h1>
        <p className="text-center text-gray-600 mb-6">No extra staff or hardware needed.</p>
        
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">What's Fair To You?</h2>
          <p className="text-sm text-gray-700 mb-4">
            Think of what you would pay a really good Membership Director; instead, pay less for our AI Subscription Pro.
          </p>
          <div className="flex justify-center items-center">
            <span className="text-4xl font-bold">€</span>
            <input type="text" className="form-input bg-transparent border-none text-center text-4xl font-bold w-full focus:ring-0" placeholder="___"/>
          </div>
          <a href="https://h40mgktic6j.typeform.com/to/I9WCyrRF?typeform-source=tearadio.co" target='_blank'>
          <button className="w-full mt-4 bg-black text-white py-2 rounded">Let's Discuss</button></a>
        </div>

        <ul className="list-none mt-6 space-y-2">
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span>
            Take our product, dress it up as your own App. We don't want our name anywhere.
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span>
            Ping your loyal customers directly, bypassing phone carriers & email platforms.
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span>
            We give each signee a scannable Digital Membership card with no additional hardware.
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span>
            We send you a check every month after collecting subscription payments & failures.
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span>
            You always own your data!
          </li>
        </ul>
      </div>
    </div>

    <div className="flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-5xl tracking-widest">F A Q S</h1>
    <h1 className="text-5xl font-bold text-center mt-10">Frequently Asked Questions</h1>
    <h2 className="text-2xl mt-10">Do you have any questions, look here.</h2>
    <div className="collapse collapse-plus  mt-4">

  <input type="radio" name="my-accordion-3" defaultChecked /> 
  <div className="collapse-title text-xl font-medium">
  What problem is Tea Radio solving, and the solution?  </div>
  <div className="collapse-content"> 
    <p>Small businesses find it tough to start subscription services — it's usually too complex or costly.
We simplify the ability for brick & mortar stores to adopt a subscription model for consistent monthly revenue. </p>
  </div>
</div>
<div className="collapse collapse-plus ">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  What makes this product different or special?  </div>
  <div className="collapse-content"> 
    <p>Our target is helping businesses generate consistent revenue through subscriptions, crucial for survival in today's subscription-based economy. </p>
  </div>
</div>
<div className="collapse collapse-plus ">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  What's Tea Radio's advantage?  </div>
  <div className="collapse-content"> 
    <p>Tea Radio equips small businesses with the subscription tools that big companies thrive on, ensuring they stay competitive and profitable.</p>
  </div>
</div>
<div className="collapse collapse-plus ">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  How do I get off the waiting list sooner?  </div>
  <div className="collapse-content"> 
  Contact our CEO and tell him to move faster: Freddie@OAagency.com  </div>
</div>
</div>
<footer className="footer p-10 bg-base-200 text-base-content" style={{ backgroundImage: `url('https://i.ibb.co/pvvTWqK/Background.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <aside>
  <div className="flex items-center space-x-4">
  <img src="https://framerusercontent.com/images/3uUfO6U78aYsU7W21Kop9HdU1E.png" alt="Description of image" className="w-12 h-auto" />
  <p className='text-2xl font-bold '>Tea Radio</p>
</div>

    <p>Transforming Businesses into<br/>Businesses into Subscription</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover" href="https://investor.tearadio.co/" target='_blank'>Investors</a>
    <a className="link link-hover" href="https://calendly.com/tearadio" target='_blank'>Schedule Meeting</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Product</h6> 
    <a className="link link-hover" href="https://park14.tearadio.co/auth" target='_blank'>Log-In</a>
    <a className="link link-hover" href="https://park14.tearadio.co" target='_blank'>Product Demo</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Contact</h6> 
    <a className="link link-hover" href="https://park14.tearadio.co/" target='_blank'>Freddie@oaagency.com</a>
    <a className="link link-hover" href="https://park14.tearadio.co" target='_blank'>Rokin 93, Amsterdam</a>
  </nav>
</footer>

    </main>
  );
}
