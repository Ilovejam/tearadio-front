import React from 'react'

const Bottom = () => {
    return (
      <div className="flex justify-center items-center w-full h-screen"> {/* Dış div, tam merkezde */}
        <div className="flex justify-center items-center gap-1"> {/* İç div, butonlar arasında 1 marginlik boşluk */}
          <button className="btn bg-red-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150">In-Active</button>
  
          <button className="btn bg-red-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150">Active</button>
  
          <button className="btn bg-red-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150">VIP</button>
  
          <button className="btn bg-red-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150">All Members</button>
        </div>
      </div>
    )
  }
  
  

export default Bottom
