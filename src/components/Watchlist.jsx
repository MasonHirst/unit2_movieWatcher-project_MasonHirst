import React from "react";
import MovieCard from "./MovieCard";

const Watchlist = ({ watchlist, movieList, removeMovie }) => {
   let movieDisplay = watchlist.map((movie) => {
      return (
         <MovieCard
            movie={movie}
            removeMovie={removeMovie}
            watchlist={watchlist}
            movieList={movieList}
         />
      );
   });

   return (
      <div className="watchlist">
         <h1>My Watchlist</h1>
         <div className="movie-container">{movieDisplay}</div>
      </div>
   );
};

export default Watchlist;
