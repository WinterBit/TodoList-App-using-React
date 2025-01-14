import React, { useState } from 'react'
import Dropdown from './dropdown'

const todo = () => {
  const [ischeck, setIscheck] = useState(false)
  const [checkedStyle, setCheckedStyle] = useState({ display: 'block', bgcolor: '#e55c8a', "text-decoration-line": "line-through", color: "#879098" })
  const [notcheckedStyle, setNotcheckedStyle] = useState({ display: 'none', bgcolor: '#484f59', "text-decoration-line": "none", color: "white" })

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

  const handleCheck = () => {
    setIscheck(!ischeck)
  }

  const taskStyle = {
    color: ischeck ? checkedStyle.color : notcheckedStyle.color,
    textDecorationLine: ischeck ? checkedStyle['text-decoration-line'] : notcheckedStyle['text-decoration-line']
  };

  return (
    <div className='todo w-full h-[10%] flex justify-between items-center'>
      <div className="left flex items-center gap-3">

        <div className="boxcheck w-[18px] h-[18px] relative">
          <input onClick={handleCheck} className='w-[18px] h-[18px] opacity-0 absolute z-30' type="checkbox" id='check' />
          <span style={{ backgroundColor: ischeck ? checkedStyle.bgcolor : notcheckedStyle.bgcolor }} className='box absolute left-0 bg-[#484f59] border-[1px] border-black w-[18px] h-[18px] rounded-sm z-10'></span>
          <span style={{ display: ischeck ? checkedStyle.display : notcheckedStyle.display }} className="check absolute left-1/2 top-px -translate-x-1/2 w-1/3 h-2/3 border-b-2 border-r-2 rotate-45 z-20"></span>
        </div>

        <div style={taskStyle} className="task text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
      </div>

      <div className="right relative">

        <div onClick={handleClick} className="more relative rounded-full cursor-pointer hover:bg-[#e55c8a44] transition-all ease-linear">
          <svg className='hover:text-[#e55c8a]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#a2abb8"} fill={"none"}>
            <path d="M11.9959 12H12.0049" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.9998 12H18.0088" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.99981 12H6.00879" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {clicked && (<Dropdown/>)}
      </div>

    </div>
  )
}

export default todo
