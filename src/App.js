import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import MovieGrid from "./components/MovieGrid";
import FavouriteMovies from "./components/FavouriteMovies";
function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);

  const fetchMovies = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=2f8c17c`;
    const res = await axios(url);
    if (res.data.Search) {
      setMovies(res.data.Search);
    }
  };

  useEffect(() => {
    fetchMovies(searchValue);
    // eslint-disable-next-line
  }, [searchValue]);
  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem("moviebuddy"));
    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLoacalStorage = items => {
    localStorage.setItem("moviebuddy", JSON.stringify(items));
  };

  const addFavouriteMovie = movie => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLoacalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = movie => {
    const newFavouriteList = favourites.filter(
      favourite => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouriteList);
    saveToLoacalStorage(newFavouriteList);
  };

  return (
    <div className="App">
      <Nav searchValue={searchValue} setSearchValue={setSearchValue} />
      <Switch>
        <Route exact path="/">
          <MovieGrid movies={movies} favouriteHandler={addFavouriteMovie} />
        </Route>
        <Route exact path="/favourites">
          <FavouriteMovies
            movies={favourites}
            favouriteHandler={removeFavouriteMovie}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
