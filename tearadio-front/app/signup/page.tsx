'use client'
import React, { useState } from 'react';
import { PhoneIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, ChevronLeftIcon } from '@heroicons/react/20/solid';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const SignUp = () => {
  const [value, setValue] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Telefon numarasını backend'e gönder
    console.log(value);
  
    // Submit işleminden sonra kullanıcıyı başka bir sayfaya yönlendir
    window.location.href = 'https://park14.tearadio.co/auth';
  };
  

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6'>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col'>
        <button className='flex items-center text-sm font-semibold text-gray-700 mb-4'>
          <ChevronLeftIcon className='h-5 w-5 mr-2' />
          Back
        </button>
        <h1 className='text-xl font-semibold mb-4'>What is your mobile number?</h1>
        <form onSubmit={handleSubmit}>
          <PhoneInput
            international
            defaultCountry='US'
            value={value}
            onChange={setValue}
            placeholder='Enter phone number'
            className='mb-4'
          />
          <p className='text-grey-dark text-xs italic mt-2 mb-4'>
            We'll send you a verification code by text message so you can confirm that it's really you.
          </p>
          <button
            type='submit'
            className='flex justify-center items-center mt-4 bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
