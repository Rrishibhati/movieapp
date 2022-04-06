import React from "react"

function FavList({ movies}) {

    console.log(movies);

    return (
        <>
            {movies && movies.map((movie, index) => (
                <div key={index} className="movie-container d-flex movie-column align-items-center">
                    <img src={movie.Poster} alt="favourite-poster" className="movie-poster" />
                    {/* <div className="poster-footer">
                        <button className="add-to-fav" onClick={() => addToFav(movie) }>ADD TO FAVOURITE</button>
                    </div> */}
                </div>
            ))}
        </>

    )
}

export default FavList