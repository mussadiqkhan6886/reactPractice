import { useContext, useState, useEffect, createContext, Children } from "react";

const MovieContext = createContext()

export const useMovieContext = () => {useContext(MovieContext)}

export const movieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        let storedFav = localStorage.getItem('favorites');
        if(storedFav) setFavorites(JSON.parse(storedFav))
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    return <MovieContext.Provider>
            {children}
        </MovieContext.Provider>
    
}