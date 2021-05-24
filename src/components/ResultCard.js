import React, { Fragment, useContext } from "react";
import { Context } from "../store/global-state";

const ResultCard = ({ movie }) => {
  const { addMovieHandler,addMovieToWatched, watchlistItem, watched } = useContext(Context);

  const storedMovie = watchlistItem.find((o) => o.id === movie.id);
  const storedWatchedMovie = watched.find((o) => o.id === movie.id);

  const movieDisabled = storedMovie ? true : storedWatchedMovie ? true : false;
  const watchedMovieDisabled = storedWatchedMovie ? true  : false;

  return (
    <Fragment>
      <div className="result-card">
        <div className="poster-wrapper">
          {movie.poster_path ? (
            <img
              width="200px"
              height="250px"
              src={`https://images.tmdb.org/t/p/w200${movie.poster_path}`}
              alt="result card"
            />
          ) : (
            <div className="filter-poster">No Img</div>
          )}
        </div>
        <div className="info">
          <div className="header">
            <h3 className="title">{movie.title}</h3>
            <h4 className="release-date">
              {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
            </h4>
            <div className="controls">
              <button
                className="btn"
                disabled={movieDisabled}
                onClick={() => addMovieHandler(movie)}
              >
                Add to WatchList
              </button>
              <button
                className="btn"
                disabled={watchedMovieDisabled}
                onClick={() => addMovieToWatched(movie)}
              >
                Add to Watched
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ResultCard;
