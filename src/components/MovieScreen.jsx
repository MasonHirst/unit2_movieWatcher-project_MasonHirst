import React from "react";
import MovieCard from "./MovieCard";


const MovieScreen = (props) => {
    const { movieList, page, setPage } = props

    let movieDisplay = movieList.map((movie) => {
        return <MovieCard movie={movie}/> 
    })

    console.log(movieDisplay)

    return (
        <div className="page">
            <h1>Mason Movie Theatre</h1>
            <h3>Add a movie to your watchlist!</h3>
            <div className="movie-container">
                {movieDisplay}
            </div>
        </div>
    )
}


export default MovieScreen