import React from 'react';
import { FaTrash } from 'react-icons/fa';

export default function TodoItems({ text,id,isCompleted,deleteTodos,toggle }) {
  return (
    <div className="flex gap-2 mt-7 border-teal-300">
      <button className='text-red-500'>
        
      </button>
      <p className={`uppercase text-2xl ${isCompleted ? 'line-through' : ''}`}>{text}</p>
      <span onClick={()=>deleteTodos(id)} className='bg-red-500 rounded-xl py-1 px-3 text-white font-bold'>
      <FaTrash />
      </span>
    </div>
  );
}
