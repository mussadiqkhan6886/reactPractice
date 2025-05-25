import React from 'react'
import Search from "./Search"
import Add from "./Add"

const Header = () => {
  return (
    <div className='p-3 '>
      <h1 className='text-white font-bold text-3xl'>Grocery List</h1>
      <div>
        <Search />
        <Add />
      </div>
    </div>
  )
}

export default Header
