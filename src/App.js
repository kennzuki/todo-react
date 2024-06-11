import Todo from "./components/Todo";


function App() {
 
  return (
    <div className='text-center flex flex-col gap-8 items-center place-items-center p-12 border'>
      <h1 className='text-3xl font-bold  text-blue-600'>ken todo list</h1>
     <Todo/>
    </div>
  );
}

export default App;
