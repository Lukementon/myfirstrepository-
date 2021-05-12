import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const FavouriteMovies = ({ movies, favouriteHandler }) => {
  return (
    <StyledFavourites>
      {movies.map(movie => (
        <div key={movie.imdbID} className="movie">
          <img src={movie.Poster} alt="movie" />
          <div onClick={() => favouriteHandler(movie)} className="overlay">
            <h3>{movie.Title}</h3>
            <h4>{movie.Year}</h4>
            <FontAwesomeIcon
              icon={faTimes}
              size="2x"
              style={{ color: "grey" }}
            />
          </div>
        </div>
      ))}
    </StyledFavourites>
  );
};

const StyledFavourites = styled.div`
  min-height: 10vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 325px);
  grid-gap: 2rem;
  padding: 0rem 5rem 2rem 5rem;
  background-color: rgb(8, 8, 8);
  .movie {
    height: 50vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: transform 1.2s ease;
    overflow: hidden;
  }

  .overlay {
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    height: 0%;
    bottom: 0;
    width: 100%;
    display: hidden;
    transition: 1.2s ease;
    h3 {
      padding: 1rem;
      display: none;
    }
    h4 {
      padding-bottom: 1rem;
      display: none;
    }
    .icon {
      display: none;
    }
  }
  .movie:hover {
    transform: scale(1.2);
    z-index: 5;
    border: 2px solid white;
  }
  .movie:hover .overlay {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    h3 {
      padding: 2rem 1rem 1rem 1rem;
      display: block;
    }
    h4 {
      padding-bottom: 1rem;
      display: block;
    }
    .icon {
      display: block;
    }
  }

  img {
    height: 50vh;
    width: 100%;
    object-fit: cover;
  }
`;

export default FavouriteMovies;
