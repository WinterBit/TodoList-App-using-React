import React from 'react'
import TodoHead from './compnents/todoHead'
import AddTodo from './compnents/addTodo'
import Todos from './compnents/todos'


const App = () => {
  return (
    <main className='h-screen w-full flex justify-center items-center'>

      <div className='TodoBox bg-[#3c424a] w-[600px] h-[780px] rounded-md relative'>
        <TodoHead />
        <AddTodo />
        <Todos />
      </div>

    </main>
  )
}

export default App
