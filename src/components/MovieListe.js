import React from 'react'
import MovieCard from "./MovieCard";
function MovieListe({ Movies }) {
  
  return (
    <div>
      {Movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default MovieListe