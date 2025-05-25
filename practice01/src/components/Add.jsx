import React, { useState } from 'react'

const Add = () => {
  const [addItem, setAddItem] = useState("")
  return (
    <form className='w-full flex gap-3'>
      <input className='p-1 px-3 flex-1  bg-blue-500 shadow-xl placeholder:text-white text-white outline-none' type="text" placeholder='Add Item' onChange={e => setAddItem(e.target.value)} value={addItem} />
      <button className='bg-blue-300 p-1 px-4 cursor-pointer font-bold hover:bg-green-400 '>+</button>
    </form>
  )
}

export default Add
