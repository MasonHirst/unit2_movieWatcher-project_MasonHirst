import React from "react";


const MovieCard = (props) => {
    const {original_title, poster_path } = props

    return (
        <div className="movie-card">
            <div>
                <img src={`https://image.tmdb.org/t/p/original${poster_path}`} />

            </div>
        </div>
    )
}


export default MovieCard