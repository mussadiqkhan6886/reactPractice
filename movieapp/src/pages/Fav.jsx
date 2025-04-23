import React from 'react'
import { useMovieContext } from '../context/MovieContext'
import MovieCard from '../components/MovieCard';

const Fav = () => {

  const { favorites } = useMovieContext();

  if(favorites.length > 0){
    return ( 
      <div> 
        <h2 className='text-3xl text-white text-center mb-5 font-bold tracking-wide'>Favorites</h2>
        <div className='flex flex-col gap-7 w-full sm:grid sm:grid-cols-2 md:grid-cols-3 cursor-pointer lg:grid-cols-5'> 
          {favorites.map(movie => (
              <MovieCard movie={movie} key={movie.id} /> )
          )}
      </div>
    </div>
    )
  }
  return (
    <div className='bg-gray-700 p-10 rounded-2xl flex flex-col items-center '>
      <h1 className='text-red-600 font-bold text-2xl'>No Favorite movies yet.</h1>
      <p className='text-gray-400 text-center'>Start adding Favorites movies and it will appear here</p>
    </div>
  )
}

export default Fav
