import React from 'react'

const addTodo = ({handleChange,handleSave,todo}) => {
    
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSave()
        }
    }

    return (
        <div className="addTodo h-[20%] w-[85%] m-auto flex flex-col items-center">

            <div className='addTitle text-2xl font-extrabold my-5'>Add a Todo</div>
            
            <div className="intodo w-full h-10 flex justify-between items-center my-5">

                <div className="inputbox flex justify-center items-center gap-2 w-[83%] h-full bg-[#1d1e23] border-[1px] border-black rounded-md">
                    {/* Texticon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#71767a"} fill={"none"}>
                        <path d="M3 3H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 9H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 15H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 21H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {/* ------ */}
                    <input onKeyDown={handleKeyDown} onChange={handleChange} value={todo} className='w-[92%] h-full outline-none bg-transparent' type="text" placeholder='Add a task...' />
                </div>
                <button onClick={handleSave} className="addbtn px-5 bg-[#e55c8a] h-full flex justify-center items-center rounded-md hover:bg-[#e7457b] transition-all ease-linear">Save</button>
            </div>

        </div>
    )
}

export default addTodo
