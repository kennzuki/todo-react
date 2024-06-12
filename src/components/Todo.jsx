import TodoItems from './TodoItems';
import { useState, useRef } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([])
  const inputRef = useRef()
  const add = () => {
    const inputText = inputRef.current.value.trim()
    console.log(inputText);
    const newTodos={
      id: Date.now(),
      text: inputText,
      isCompleted:false  
    }
    setTodos((prev)=>[...prev,newTodos])
  
  }

  return (
    <div className=''>
      <section className='flex gap-2 place-items-center border-b py-4'>
        <input
          type='text'
          className='border p-2 rounded-xl'
          placeholder='Add todo'
          ref={inputRef}
        />
        <button onClick={add} className='px-3 py-1 bg-yellow-500 text-white font-bold rounded'>
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
