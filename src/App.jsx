import React from 'react'
import TodoHead from './components/todoHead'
import AddTodo from './components/addTodo'
import Todo from './components/todo'
import './App.css'


const App = () => {
  return (
    <main className='h-screen w-full flex justify-center items-center'>

      <div className='TodoBox bg-[#3c424a] w-[600px] h-[780px] rounded-md relative'>
        <TodoHead />
        <AddTodo />

        <div className="todos borde-2 h-[65%] w-[85%] m-auto">
          <div className="todosTitle text-xl font-bold mb-3">Your Todos</div>
          <Todo/>
        </div>

      </div>

    </main>
  )
}

export default App
