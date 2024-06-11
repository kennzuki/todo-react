import React from 'react';
import { FaTrash } from 'react-icons/fa';

export default function TodoItems({ text }) {
  return (
    <div className="flex gap-2 mt-7 border-teal-300">
      <button className='text-red-500'>
        Iscomplete
      </button>
      <p className=''>{text}</p>
      <span className='bg-blue-500 rounded-xl py-1 px-3 text-white font-bold'>
      <FaTrash />
      </span>
    </div>
  );
}
