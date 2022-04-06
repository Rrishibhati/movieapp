import React from "react"

function FavList({ movies, removeToFav}) {
    
    return (
        <>
            {movies && movies.map((movie, index) => (
                <div key={index} className="movie-container d-flex flex-column align-items-center">
                    <img src={movie.Poster} alt="favourite-poster" className="movie-poster" />
                    {<div className="poster-footer">
                        <button className="add-to-fav" onClick={() => removeToFav(movie) }>REMOVE</button>
                    </div>}
                </div>
            ))}
        </>

    )
}

export default FavList