"use client"
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LockClosedIcon, PhoneIcon } from '@heroicons/react/24/outline';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const Login = () => {
  const [value, setValue] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Router'ı kullanmak için tanımlayın

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    
    // Telefon numarasını ve şifreyi backend'e gönder
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: value, // PhoneInput'tan alınan değer
          password: password, // Şifre input'tan alınan değer
        }),
      });

      if (response.ok) {
        // Giriş başarılıysa, ana sayfaya yönlendir
        router.push('/'); // Buradaki yol, ana sayfanızın yolu olmalıdır
      } else {
        // Giriş başarısızsa, bir hata mesajı göster
        console.error('Giriş başarısız.');
      }
    } catch (error) {
      console.error('Sunucuya istek yapılırken hata oluştu:', error);
    }
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <h1 className="text-xl font-semibold mb-4">Login to your account</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="phone" className="block text-grey-darker text-sm font-bold mb-2">
            Mobile number
          </label>
          <PhoneInput
            international
            defaultCountry="US"
            value={value}
            onChange={setValue}
            placeholder="Enter phone number"
            className="mb-4"
          />
          <label htmlFor="password" className="block text-grey-darker text-sm font-bold mb-2">
            Password
          </label>
          <div className="mt-1 flex rounded-md shadow-sm mb-4">
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 min-w-0 block w-full px-3 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="flex justify-center items-center mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            <LockClosedIcon className="h-6 w-6 text-white mr-2" />
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
