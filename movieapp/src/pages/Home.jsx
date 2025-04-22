import React from 'react'
import MovieCard from '../components/MovieCard'

const Home = () => {
    const movies = [
        {id: 1, title: 'Inception', year: 2010, genre: 'Sci-Fi'},
        {id: 2, title: 'The Dark Knight', year: 2008, genre: 'Action'},

    ]
  return (
    <>
     <header>
        <input type="text" placeholder='Enter movie to search' />
        <button>Search</button>    
    </header> 
    <main>
        {movies.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
        ))}
    </main>
    </>
  )
}

export default Home
