import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import { getPopularMovies, searchMovie } from '../services/api';

const Home = () => {
    
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMovies = async () => {
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
                }
            catch(err){
                console.log(err)
                setError("Error in fetching data")
            }
            finally {
                setLoading(false)
            }
        }
        getMovies();
    }, [])

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(!query.trim()) return;
        if(loading) return;

        setLoading(true);

        try{
            const movieSearch = await searchMovie(query);
            setMovies(movieSearch)
            setError(null)
        }catch(err){
            console.log(err);
            setError("failed to search movie.")
        }finally{
            setLoading(false);
        }

    }

  return (
    <>
    <form className='w-full' onSubmit={handleSubmit}>
        <div className='flex gap-5 mb-5 w-full items-center justify-center'>
            <input className='bg-gray-600 border-none text-white outline-0 px-3 w-full py-2 placeholder:text-gray-400 text-[14px]' type="text" placeholder='Search movie' value={query} onChange={(e) => setQuery(e.target.value)} />
            <button type='submit' className='bg-red-600 cursor-pointer text-white px-5 py-1.5 border-none '>Search</button>    
        </div> 
    </form>

    {error && <div>{error}</div>}

    {loading ? ( <div>Loading...</div> ) : ( <div className='flex flex-col gap-7 w-full sm:grid sm:grid-cols-2 md:grid-cols-3 cursor-pointer'> 
        {movies.map(movie => (
            <MovieCard movie={movie} key={movie.id} /> )
        )}
    </div>)}
    </>
  )
}

export default Home
