import React from 'react';

const Utilities = () => {
  return (
    <div className="text-blue-500 rounded-lg  p-6 max-w-sm w-full">
      <ul className="divide-y divide-gray-200">
        <li className="py-3 flex justify-between">
          <span>See Manager</span>
          <span>85</span>
        </li>
        <li className="py-3 flex justify-between">
          <span>Staff</span>
          <span>48</span>
        </li>
        <li className="py-3 flex justify-between">
          <span>Never finished Application</span>
          <span>N/A</span>
        </li>
        <li className="py-3 flex justify-between">
          <span>Notes staff added</span>
          <span>N/A</span>
        </li>
        <li className="py-3 flex justify-between">
          <span>Banned</span>
          <span>31</span>
        </li>
        <li className="py-3 flex justify-between">
          <span>Duplicates</span>
          <span>2</span>
        </li>
        <li className="py-3 flex justify-between">
          <span>Suggestions for Tea Radio</span>
          <span>0</span>
        </li>
      </ul>
    </div>
  );
};

export default Utilities;
