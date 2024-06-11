import { useState,useRef } from "react";
import { FaTrash } from 'react-icons/fa';

function App() {

  const [todos, setTodos] = useState([])
  const inputRef=useRef()
  const add= () => {
     const inputText=inputRef.current.value.trim()
  }
  return (
    <div className='text-center flex flex-col gap-8 items-center place-items-center p-12 border'>
      <h1 className='text-3xl font-bold  text-blue-600'>ken todo list</h1>
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
      <section className=''>
        <h1 className='uppercase flex gap-2 place-items-center'>
          joined a club{' '}
          <span className='text-red-500'>
            <FaTrash />
          </span>
          <span className='bg-blue-500 rounded-xl py-1 px-3 text-white font-bold'>Edit</span>
        </h1>
      </section>
    </div>
  );
}

export default App;
