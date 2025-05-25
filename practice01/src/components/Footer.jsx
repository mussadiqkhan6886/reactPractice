import React, { useContext } from 'react'
import { ListContext } from '../context/ListContext'

const Footer = () => {
  const {list} = useContext(ListContext)
  return (
    <div className='p-2 text-white'>
      <h1 className='text-xl'>Items: {list.length}</h1>
      <h2>CopyRight &copy; 2025</h2>
    </div>
  )
}

export default Footer
