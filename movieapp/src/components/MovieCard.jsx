import React, { useState } from 'react'
import { useMovieContext } from '../context/MovieContext';

const MovieCard = ({movie}) => {

  const { isFavorite, addToFavorites, removeFavorite } = useMovieContext()
  const favorites = isFavorite(movie.id)

  const handleClick = () => {
    if(favorites) removeFavorite(movie.id)
    else addToFavorites(movie)
  }
  
  const [mouse, setMouse] = useState(false);

  const handleMouseIn = () => {
    setMouse(true);
  }

  const handleMouseOut = () => {
    setMouse(false);
  }



  return (
    <div className='bg-gray-900 flex flex-col relative'>
      <div onMouseOver={handleMouseIn} onMouseLeave={handleMouseOut} className={`w-full ${mouse ? 'brightness-75' : ''} `}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      </div>
      <div onMouseOver={handleMouseIn} onMouseLeave={handleMouseOut} className={`absolute top-1 right-3 ${mouse ? "block" : "hidden"} `}>
        <button onClick={handleClick} className={`${favorites ? 'text-red-600' : 'text-white'} text-2xl cursor-pointer`}>♥</button>
      </div>
      <div className='p-4'>
        <h1 className='text-white'>{movie.title}</h1>
        <h2 className='text-gray-500'>{movie.release_date?.split('-')[0]}</h2>
      </div>
    </div>
  )
}

export default MovieCard
