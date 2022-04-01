import React from "react"

function MovieList({ movies }) {
    return (
        <>
            {movies && movies.map((movie, index) => (
                <div className="movie-container d-flex justify-content-start m3">
                    <img src={movie.Poster} alt="movie-poster" className="movie-poster" />
                </div>
            ))}
        </>

    )
}

export default MovieList