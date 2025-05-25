import React, { useState } from 'react'

const Search = () => {
  const [searchValue, setSearchValue] = useState("")
  return (
    <form className='w-full'>
      <input className='p-1 px-3 w-full my-3 bg-blue-500 shadow-xl placeholder:text-white text-white outline-none' type="text" placeholder='Search Item' onChange={e => setSearchValue(e.target.value)} value={searchValue} />
    </form>
  )
}

export default Search
