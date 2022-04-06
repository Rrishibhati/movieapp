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

  const addToFav = (item) => {
    !!item && setFav([...favourites, item]);
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

      <div className="list-header d-flex align-items-center justify-content-between">
        <Heading title="Favourites List" />
      </div>
      <div className="d-flex flex-wrap-nowrap fav-list-container">
        <FavList movies={favourites} addToFav={addToFav} />
      </div>
    </div>
  );
}

export default App;
