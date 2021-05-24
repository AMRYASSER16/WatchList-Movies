import React, { useContext } from "react";
import { Context } from '../store/global-state';

const MovieControls = ({ type, movie }) => {

    const { deleteMovieHandler, addMovieToWatched, deleteMovieFromWatched, moveMovieToWatchList } = useContext(Context)

    return (
        <div className="inner-card-controls">
            {type === "watchlist" && (
                <>
                    <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
                        <i className="fa-fw far fa-eye"></i>
                    </button>

                    <button
                        onClick={() => deleteMovieHandler(movie.id)}
                        className="ctrl-btn">
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}

            {type === "watched" && (
                <>
                    <button className="ctrl-btn" onClick={() => moveMovieToWatchList(movie)}>
                        <i className="fa-fw far fa-eye-slash"></i>
                    </button>

                    <button className="ctrl-btn" onClick={() => deleteMovieFromWatched(movie.id)}>
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}
        </div>
    );
};

export default MovieControls;