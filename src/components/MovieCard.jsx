import React from "react";

const MovieCard = ({ addMovie, movie, removeMovie, watchlist }) => {
   // console.log("movie list log: ", );

   const inWatchlist = watchlist.filter((mov) => {
      return mov.id === movie.id;
   });
   //! the bug is in the above filter function. when add to list is clicked, movieList goes from being an array of movies to undefined

   const button =
      inWatchlist.length === 0 ? (
         <button onClick={() => addMovie(movie)}>Add to List</button>
         ) : (
         <button onClick={() => removeMovie(movie)}>Remove</button>
      );

   return (
      <div className="movie-card">
         <div>
            <img
               src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
            <h3>{movie.original_title}</h3>
         </div>
         {button}
      </div>
   );
};

export default MovieCard;
