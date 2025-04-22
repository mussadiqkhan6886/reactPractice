import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div>
      <div>
        <img src="" alt={movie.title} />
      </div>
      <div>
        <button>♥</button>
      </div>
      <div>
        <h1>{movie.title}</h1>
        <h2>{movie.release_date}</h2>
      </div>
    </div>
  )
}

export default MovieCard
