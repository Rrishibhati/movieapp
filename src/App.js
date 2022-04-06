import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import Heading from './components/Heading';
import FavList from './components/FavList';

const url = "http://www.omdbapi.com/?apikey=5e99cb16";

function App() {

  const [movies, setMovies] = useState([]);
  const [favourites, setFav] = useState([]);

  useEffect(() => {
    fetchMovies(url + '&s=avengers');
    const favList = JSON.parse(localStorage.getItem('favourite_list'));
    !!favList && setFav(favList);
  }, [])

  const handleSearch = async (e) => {
    let search = e.target.value.trim();
    if (!search) search = 'avengers';

    await fetchMovies(url + '&s=' + search);
  }

  const fetchMovies = async (url) => {

    const response = await fetch(url);
    const responseJson = await response.json();

    if (!responseJson?.Search) {
      return;
    }
    setMovies(responseJson.Search);
  }

  const addToFav = async (item) => {
    await !!item && setFav([...favourites, item]);
    await localStorage.setItem('favourite_list', JSON.stringify([...favourites, item]));
  }

  const removeToFav = (item) => {

    const index = favourites.findIndex((movie) => {
      return (movie.imdbID === item.imdbID);
    });

    if (index === -1) {
      alert('Movie not found in favourite list');
      return;
    }

    const newFav = favourites;
    newFav.splice(index, 1);
    setFav([...newFav]);
    localStorage.setItem('favourite_list', JSON.stringify([...newFav]));
  }

  return (
    <div className="container-fluid movie-app">
      <div className="list-header d-flex align-items-center justify-content-between">
        <Heading title="Movies List" />
        <input type="text" className="form-control movie-search" onKeyUp={handleSearch} placeholder='Search...' />
      </div>
      <div className="d-flex flex-wrap-nowrap movie-list-container">
        <MovieList movies={movies} addToFav={addToFav} />
      </div>
      { favourites && favourites.length > 0  
          ? (
            <>
              <div className="list-header d-flex align-items-center justify-content-between">
                <Heading title="Favourites List" />
              </div>
              <div className="d-flex flex-wrap-nowrap fav-list-container">
                <FavList movies={favourites} removeToFav={removeToFav} />
              </div>
            </>
          )
          : ( <></> )
      }
      
    </div>
  );
}

export default App;
