import React from "react"

function MovieList({ movies, addToFav }) {
    return (
        <>
            {movies && movies.map((movie, index) => (
                <div key={index} className="movie-container d-flex flex-column align-items-center">
                    <img src={movie.Poster} alt="movie-poster" className="movie-poster" />
                    <div className="poster-footer">
                        <button className="add-to-fav" onClick={() => addToFav(movie) }>ADD TO FAVOURITE</button>
                    </div>
                </div>
            ))}
        </>

    )
}

export default MovieList