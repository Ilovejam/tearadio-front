import React from 'react'

const FilterFormApplication = () => {
  return (
    <div className="text-blue-500 rounded-lg  p-6 max-w-sm w-full">
      <ul className="divide-y divide-gray-200">
        <li className="py-3 flex justify-between">
          <span>City</span>
          <span>64</span>
        </li>
        <li className="py-3 flex justify-between">
          <span>State</span>
          <span>10</span>
        </li>
        <li className="py-3 flex justify-between">
          <span>Country</span>
          <span>21</span>
        </li>
        <li className="py-3 flex justify-between">
          <span>Birthday / Age</span>
          <span>456</span>
        </li>
        <li className="py-3 flex justify-between">
          <span>Interests</span>
          <span>39</span>
        </li>
        <li className="py-3 flex justify-between">
          <span>Favorite Spirits</span>
          <span>200</span>
        </li>
        <li className="py-3 flex justify-between">
          <span>Reffered By</span>
          <span>20</span>
        </li>
      </ul>
    </div>
  )
}

export default FilterFormApplication
