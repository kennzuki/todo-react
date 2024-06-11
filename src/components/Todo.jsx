import TodoItems from './TodoItems';
import { useState, useRef } from 'react';

const Todo = () => {
  return (
    <div className=''>
      <section className='flex gap-2 place-items-center border-b py-4'>
        <input
          type='text'
          className='border p-2 rounded-xl'
          placeholder='Add todo'
        />
        <button className='px-3 py-1 bg-yellow-500 text-white font-bold rounded'>
          Add+
        </button>
      </section>
      {/* todo list */}
      <section className='flex flex-col gap-2'>
        <ul className='uppercase flex flex-col gap-2 items-center'></ul>
      </section>
      <TodoItems text='learning TS' />
      <TodoItems text='Learning next js' />
    </div>
  );
};

export default Todo;
