 import React, { useState, useCallback } from "react";
import { BaseMovieProps, Review } from "../types/interfaces";

interface MovieContextInterface {
    favourites: number[];
    addToFavourites: ((movie: BaseMovieProps) => void);
    isLoggedIn: boolean;
    removeFromFavourites: ((movie: BaseMovieProps) => void);
    addReview: ((movie: BaseMovieProps, review: Review) => void);  
    playlist: number[]; 
    addToPlaylist: (movie: BaseMovieProps) => void;
    mustWatch: number[];  
    addToMustWatch: (movie: BaseMovieProps) => void;
    toggleLogin: () => void; 
}

const initialContextState: MovieContextInterface = {
    favourites: [],
    addToFavourites: () => {},
    isLoggedIn: false,
    removeFromFavourites: () => {},
    addReview: (movie, review) => { movie.id, review}, 
    playlist: [],
    addToPlaylist: () => {},
    mustWatch: [],
    addToMustWatch: () => {},
    toggleLogin: () => {}, 
};

export const MoviesContext = React.createContext<MovieContextInterface>(initialContextState);

const MoviesContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [myReviews, setMyReviews] = useState<Review[]>([]);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // State for login status
    const [favourites, setFavourites] = useState<number[]>([]);
    const [playlist, setPlaylist] = useState<number[]>([]);
    const [mustWatch, setMustWatch] = useState<number[]>([]);

    const addToFavourites = useCallback((movie: BaseMovieProps) => {
        setFavourites((prevFavourites) => {
            if (!prevFavourites.includes(movie.id)) {
                return [...prevFavourites, movie.id];
            }
            return prevFavourites;
        });
    }, []);

    const removeFromFavourites = useCallback((movie: BaseMovieProps) => {
        setFavourites((prevFavourites) => prevFavourites.filter((mId) => mId !== movie.id));
    }, []);

    const addReview = (movie: BaseMovieProps, review: Review) => {
        setMyReviews({ ...myReviews, [movie.id]: review });
    };

    const addToPlaylist = useCallback((movie: BaseMovieProps) => {
        setPlaylist((prevPlaylist) => {
            if (!prevPlaylist.includes(movie.id)) {
                return [...prevPlaylist, movie.id];
            }
            return prevPlaylist;
        });
    }, []);

    const addToMustWatch = useCallback((movie: BaseMovieProps) => {
        setMustWatch((prev) => {
            if (!prev.includes(movie.id)) {
                console.log("Added to must watch:", [...prev, movie.id]);
                return [...prev, movie.id];
            }
            return prev;
        });
    }, []);

    // Function to toggle login status
    const toggleLogin = () => {
        setIsLoggedIn((prev) => !prev);
    };

    return (
        <MoviesContext.Provider
            value={{
                favourites,
                addToFavourites,
                isLoggedIn,
                toggleLogin, 
                removeFromFavourites,
                addReview,
                playlist,
                addToPlaylist,
                mustWatch,
                addToMustWatch,
            }}
        >
            {children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;
