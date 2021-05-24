import { React, useReducer, createContext } from 'react';

const initialState = {
    watchlist: [],
    watched: []
}

export const Context = createContext(initialState);


export const GlobalProvider = props => {

    const reducer = (state, action) => {
        if (action.type === 'ADD_MOVIE') {
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist]
            };
        }
        if (action.type === 'DELETE_MOVIE') {
            return {
                ...state,
                watchlist: state.watchlist.filter(movie => movie.id !== action.payload)
            }
        }
        if (action.type === 'ADD_MOVIE_TO_WATCHED') {
            return {
                ...state,
                watchlist: state.watchlist.filter(movie => movie.id !== action.payload.id),
                watched: [action.payload, ...state.watched]
            }
        }
        if (action.type === 'Move_MOVIE_TO_WATCHLIST') {
            return {
                ...state,
                watched: state.watchlist.filter(movie => movie.id !== action.payload.id),
                watchlist: [action.payload, ...state.watchlist]
            }
        }
        if (action.type === 'DELETE_MOVIE_FROM_WATCHED') {
            return {
                ...state,
                watched: state.watched.filter(movie => movie.id !== action.payload)
            }
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const addMovieHandler = movie => dispatch({ type: 'ADD_MOVIE', payload: movie })

    const deleteMovieHandler = id => dispatch({ type: 'DELETE_MOVIE', payload: id })

    const addMovieToWatched = movie => dispatch({ type: 'ADD_MOVIE_TO_WATCHED', payload: movie })

    const deleteMovieFromWatched = id => dispatch({ type: 'DELETE_MOVIE_FROM_WATCHED', payload: id })

    const moveMovieToWatchList = movie => dispatch({ type: 'Move_MOVIE_TO_WATCHLIST', payload: movie })

    return (
        <Context.Provider value={{
            watchlistItem: state.watchlist,
            watched: state.watched,
            addMovieHandler,
            deleteMovieHandler,
            addMovieToWatched,
            deleteMovieFromWatched,
            moveMovieToWatchList
        }}>
            {props.children}
        </Context.Provider>
    )
}