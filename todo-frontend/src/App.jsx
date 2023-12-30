import React from 'react'
import './App.css'
import { useState } from 'react'


function App(){
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if(todo!==''){
      setTodos([...todos , todo]);
      setTodo('');
  }
  };


  return (
    <>
      <h1>TODOS</h1>
      <div className='input-container'>

      <input type="text" placeholder="Enter a task" value={todo} onChange={(e)=>{
        setTodo(e.target.value)
      }}></input>
      <button className='add-todos' onClick={addTodo}> + Add Todos</button>
      </div>
    </>
  )
}

export default App
