import React, { useState } from 'react'

const Search = () => {
  const [searchValue, setSearchValue] = useState("")

  const handleChange = (e) => {
    setSearchValue(e.target.setSearchValue)
    
  }

  return (
    <form className='w-full'>
      <input className='p-1 px-3 w-full my-3 bg-blue-500 shadow-xl placeholder:text-white text-white outline-none' type="text" placeholder='Search Item' onChange={handleChange} value={searchValue} />
    </form>
  )
}

export default Search
