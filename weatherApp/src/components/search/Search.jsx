import React, { useState, useContext } from 'react'
import api from '../../api'
import { ResultContext } from '../../context/ResultContext'

const Search = () => {
    const TOKEN = "81be420a9a91c8b3fe8d38ead27dd6b7"
    const [query, setQuery] = useState("")
    const {result, setResult} = useContext(ResultContext)
    
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
        setResult(data.data)
        console.log(result)
    }
    

  return (
    <div className='flex justify-center items-center w-full flex-col'>
      <input className='border-1 rounded-xl w-80' type="text" placeholder='Enter city name' onChange={handleChange} value={query} autoComplete='off'  />
      <button className='bg-black text-white' onClick={submitData}>Search</button>
    </div>
  )
}

export default Search
