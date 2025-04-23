import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div className='bg-gray-900 flex flex-col p-4'>
      <div className='w-full h-[350px]'>
        <img src="" alt={movie.title} />
      </div>
      <div>
        <button className='text-white text-2xl'>♥</button>
      </div>
      <div>
        <h1 className='text-white'>{movie.title}</h1>
        <h2 className='text-gray-500'>{movie.year}</h2>
      </div>
    </div>
  )
}

export default MovieCard
