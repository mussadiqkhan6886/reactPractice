import React, { useState, useContext, useRef } from 'react'
import { ListContext } from '../context/ListContext'

const Add = () => {
  const [addItem, setAddItem] = useState("")
  const {list, setList} = useContext(ListContext)

  const userRef = useRef()

  const addItemToList = (e) => {
    e.preventDefault()
    if(!addItem) return
    const id = list.map((item) => item.id ? list[list.length - 1].id + 1 : 1) 
    const newList = [...list, {id, item: addItem, checked: false}]
    setList(newList)
    setAddItem("")
    userRef.current.focus()
  }

  return (
    <form onSubmit={addItemToList} className='w-full flex gap-3'>
      <input ref={userRef} className='p-1 px-3 flex-1  bg-blue-500 shadow-xl placeholder:text-white text-white outline-none' type="text" placeholder='Add Item' onChange={e => setAddItem(e.target.value)} value={addItem} />
      <button className='bg-blue-300 p-1 px-4 cursor-pointer font-bold hover:bg-green-400 '>+</button>
    </form>
  )
}

export default Add
