import React, { useEffect, useRef, useState } from 'react'
import TodoHead from './components/todoHead'
import AddTodo from './components/addTodo'
import Todo from './components/todo'
import './App.css'
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [todos, setTodos] = useState([])
  const [task, setTask] = useState("")
  const inputRef = useRef(null)

  const handleSave = () => {
    setTodos([...todos, { id: uuidv4(), task, isCompleted: false }])
    setTask("")
  }

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  const handleFocus = (params) => {
    inputRef.current.focus();
  }

  // const saveToLS = () => {
  //   localStorage.setItem("todos",JSON.stringify(todos))
  // }

  // useEffect(() => {
  //   let todoStrings = localStorage.getItem('todos')

  //   if(todoStrings){
  //     let todos = JSON.parse(localStorage.getItem('todos'))
  //     setTodos(todos)
  //   }
  // }, [])
    
  

  return (
    <main className='h-screen w-full flex justify-center items-center'>

      <div className='TodoBox bg-[#3c424a] w-[600px] h-[780px] rounded-md relative'>
        <TodoHead />
        <AddTodo handleChange={handleChange} handleSave={handleSave} todo={task} inputRef={inputRef}/>

        <div className="todos borde-2 h-[65%] w-[85%] m-auto">
          <div className="todosTitle text-xl font-bold mb-3">Your Todos</div>
          {todos.map((task, index) => (
            <Todo key={index} task={task} todos={todos} setTodos={setTodos} setTask={setTask} handleFocus={handleFocus}/>
          ))}

        </div>

      </div>

    </main>
  )
}

export default App
