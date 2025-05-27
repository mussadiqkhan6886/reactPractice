import React, { useState, useContext, useRef, useEffect } from 'react'
import { ListContext } from '../context/ListContext'
import ApiRequest from "../ApiRequest"

const Add = () => {
  const [addItem, setAddItem] = useState("")
  const {list, setList, URL, setError} = useContext(ListContext)

  const userRef = useRef()

  useEffect(() => {
    userRef.current.focus()
  }, [list])

  const addItemToList = async (e) => {
    e.preventDefault()
    if(!addItem) return
    const id = list.length ? list[list.length - 1].id + 1 : 1 
    const newItem = {id, item: addItem, checked: false}
    const newList = [...list, newItem]
    setList(newList)
    setAddItem("")
    userRef.current.focus()

    const postOpt = {
      method: "POST",
      headers: {
        'Content-Type' : "application/json"
      },
      body : JSON.stringify(newItem)
    }
    const result = await ApiRequest(URL, postOpt)
    if(result) setError(result)
  }

  return (
    <form onSubmit={addItemToList} className='w-full flex gap-3'>
      <input ref={userRef} className='p-1 px-3 flex-1  bg-blue-500 shadow-xl placeholder:text-white text-white outline-none' type="text" placeholder='Add Item' onChange={e => setAddItem(e.target.value)} value={addItem} />
      <button type='submit' className='bg-blue-300 p-1 px-4 cursor-pointer font-bold hover:bg-green-400 '>+</button>
    </form>
  )
}

export default Add
