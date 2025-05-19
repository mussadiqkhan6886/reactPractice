import React, { useState } from 'react'
import axios from 'axios'
import api from '../../api'

const Search = () => {
    const TOKEN = "81be420a9a91c8b3fe8d38ead27dd6b7"
    const [query, setQuery] = useState("")
    
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
        console.log(data)
    }

  return (
    <div>
      <input type="text" placeholder='Enter city name' onChange={handleChange} value={query} autoComplete='off'  />
      <button onClick={submitData}>Search</button>
    </div>
  )
}

export default Search
