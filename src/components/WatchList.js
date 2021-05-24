import React, { Fragment, useContext } from 'react';
import { MovieCard } from "./MovieCard";
import { Context } from '../store/global-state';

const WatchList = () => {

    const { watchlistItem } = useContext(Context)

    return (
        <Fragment>
            <div className="movie-page">
                <div className="container">
                    <div className="header">
                        <h1 className="heading">My Watchlist</h1>

                        <span className="count-pill">
                            {watchlistItem.length} {watchlistItem.length === 1 ? "Movie" : "Movies"}
                        </span>
                    </div>

                    {watchlistItem.length > 0 ? (
                        <div className="movie-grid">
                            {watchlistItem.map((movie) => (
                                <MovieCard movie={movie} key={movie.id} type="watchlist" />
                            ))}
                        </div>
                            ) : (
                            <h2 className="no-movies">No movies in your list! Add some!</h2>
                        )}
                </div>
            </div>
        </Fragment>
    )
}

export default WatchList;