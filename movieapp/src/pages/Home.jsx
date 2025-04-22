import React, { useState } from 'react'
import MovieCard from '../components/MovieCard'

const Home = () => {
    const movies = [
        {id: 1, title: 'Inception', year: 2010, genre: 'Sci-Fi'},
        {id: 2, title: 'The Dark Knight', year: 2008, genre: 'Action'},
        {id: 3, title: 'Interstellar', year: 2014, genre: 'Sci-Fi'}
    ]
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery('')
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <header>
            <input type="text" placeholder='Enter movie to search' value={query} onChange={(e) => setQuery(e.target.value)} />
            <button>Search</button>    
        </header> 
    </form>
        <main>
            {movies.map(movie => (
                movie.title.toLowerCase().startsWith(query) && (
                <MovieCard movie={movie} key={movie.id} /> )
            ))}
        </main>
    </>
  )
}

export default Home
