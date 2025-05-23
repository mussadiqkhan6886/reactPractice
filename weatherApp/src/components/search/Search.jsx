import React, { useState, useContext } from 'react'
import api from '../../api'
import { ResultContext, ResultProvider } from '../../context/ResultContext'
import Loading from '../Loading'
import Details from '../details'

const Search = () => {
  const TOKEN = "81be420a9a91c8b3fe8d38ead27dd6b7"
  const [query, setQuery] = useState("")
  const {result, setResult } = useContext(ResultContext)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [start, setStart] = useState(false)

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const submitData = async () => {
    setQuery("")
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
      setStart(true)
    } catch (err) {
      setError(err.message || "Something went wrong")
    } finally {
      setLoading(false)

      console.log(result)
    }
  }

  return (
    <>
      <header className='flex justify-center items-center w-full flex-row gap-10 p-4 bg-gray-500'>
        <input
          className='rounded p-1 px-2 bg-gray-200 w-80 outline-0'
          type="text"
          placeholder='Enter city name'
          onChange={handleChange}
          value={query}
          autoComplete='off'
        />
        <button className='bg-black text-white border-0 rounded cursor-pointer py-1 px-4' onClick={submitData}>Search</button>
        <div>
          {loading && <Loading />}
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      </header>
      <main className='m-3'>
          <Details start={start} />
      </main>
    </>
  )
}

export default Search
