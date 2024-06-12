import TodoItems from './TodoItems';
import { useState, useRef, useEffect } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState(localStorage.getItem('todo')?JSON.parse(localStorage.getItem('todo')):[]);
  const inputRef = useRef();
  // add
  const add = () => {
    const inputText = inputRef.current.value.trim();
    console.log(inputText);
    const newTodos = {
      id: Date.now(),
      text: inputText,
      isCompleted: false,
    };
    setTodos((prev) => [...prev, newTodos]);
    inputRef.current.value=''
  };
  // delete
  const deleteTodos = (id) => {
    setTodos((prvTodos) => {
      return prvTodos.filter((todo)=>todo.id !==id)
    })
  }
  // iscomlete toggle
  const toggleTodos = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id===id) {
          return {...todo,isCompleted:!todo.isCompleted}
        }
        return todo
      })
    })
  }
  // store and toggle
  useEffect(() => {
    localStorage.setItem('todo',JSON.stringify(todos))
  },[todos])

  return (
    <div className=''>
      <section className='flex gap-2 place-items-center border-b py-4'>
        <input
          type='text'
          className='border p-2 rounded-xl'
          placeholder='Add todo'
          ref={inputRef}
        />
        <button
          onClick={add}
          className='px-3 py-1 bg-yellow-500 text-white font-bold rounded'
        >
          Add+
        </button>
      </section>
      {/* todo list */}
      <section className=''>
        {todos.map((items, index) => {
          return <TodoItems key={index} text={items.text} id={items.id} isCompleted={items.isCompleted} deleteTodos={deleteTodos} toggle={toggleTodos} />;
        })}
      </section>
    </div>
  );
};

export default Todo;
