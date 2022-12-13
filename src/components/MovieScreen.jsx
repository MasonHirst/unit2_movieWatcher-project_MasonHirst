import React from "react"
import MovieCard from "./MovieCard"

const MovieScreen = ({ movieList, watchlist, page, setPage, addMovie, removeMovie }) => {
   const decrement = () => {setPage(page - 1)}
   const increment = () => {setPage(page + 1)}

   let movieDisplay = movieList.map((movie) => {
      return (
         <MovieCard
            movie={movie}
            addMovie={addMovie}
            removeMovie={removeMovie}
            watchlist={watchlist}
         />
      )
   })

   return (
      <div className="page">
         <h1>Mason Movie Theatre</h1>
         <h3>Add a movie to your watchlist!</h3>

         <div className="btn-container">
            <button onClick={decrement}>Previous page</button>
            <button onClick={increment}>Next page</button>
         </div>   
         
         <div className="movie-container">{movieDisplay}</div>
      </div>
   )
}

export default MovieScreen
