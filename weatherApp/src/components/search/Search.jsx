import React, { useState } from 'react'
import axios from 'axios'
import api from '../../api'

const Search = () => {
    const TOKEN = "81be420a9a91c8b3fe8d38ead27dd6b7"
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])
    
    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    const submitData = async () => {
        const data =  await api.get('/weather', 
            {
                params: {
                    q: query,
                    appid: TOKEN
                }
            }
        )
        setResults(data.data)
    }

  return (
    <div className='flex justify-center items-center w-full flex-col'>
      <input className='border-1 rounded-xl w-80' type="text" placeholder='Enter city name' onChange={handleChange} value={query} autoComplete='off'  />
      <button className='bg-black text-white' onClick={submitData}>Search</button>
      <h1>{results.name}</h1>
    </div>
  )
}

export default Search
