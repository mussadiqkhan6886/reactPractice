import React, { useState, useContext } from 'react'
import api from '../../api'
import { ResultContext } from '../../context/ResultContext'
import Loading from '../Loading'

const Search = () => {
  const TOKEN = "81be420a9a91c8b3fe8d38ead27dd6b7"
  const [query, setQuery] = useState("")
  const { result, setResult } = useContext(ResultContext)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const submitData = async () => {
    setLoading(true)
    setError("")
    try {
      const response = await api.get('/weather', {
        params: {
          q: query,
          appid: TOKEN
        }
      })
      setResult(response.data)
    } catch (err) {
      setError(err.message || "Something went wrong")
    } finally {
      setLoading(false)
      console.log(result)
    }
  }

  return (
    <div className='flex justify-center items-center w-full flex-col'>
      <input
        className='border-1 rounded-xl w-80'
        type="text"
        placeholder='Enter city name'
        onChange={handleChange}
        value={query}
        autoComplete='off'
      />
      <button className='bg-black text-white' onClick={submitData}>Search</button>

      {loading && <Loading />}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  )
}

export default Search
