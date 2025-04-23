import React, { useState } from 'react'

const MovieCard = ({movie}) => {
  
  const [mouse, setMouse] = useState(false);

  const handleMouseIn = () => {
    setMouse(true);
  }

  const handleMouseOut = () => {
    setMouse(false);
  }

  const handleFav = () => [
    alert('cliked')
  ]

  return (
    <div className='bg-gray-900 flex flex-col relative'>
      <div onMouseOver={handleMouseIn} onMouseLeave={handleMouseOut} className={`w-full h-[350px] ${mouse ? 'bg-black' : ''} `}>
        <img src="" alt={movie.title} />
      </div>
      <div onMouseOver={handleMouseIn} onMouseLeave={handleMouseOut} onClick={handleFav} className={`absolute top-1 right-3 ${mouse ? "block" : "hidden"} `}>
        <button className='text-white text-2xl'>♥</button>
      </div>
      <div className='p-4'>
        <h1 className='text-white'>{movie.title}</h1>
        <h2 className='text-gray-500'>{movie.year}</h2>
      </div>
    </div>
  )
}

export default MovieCard
