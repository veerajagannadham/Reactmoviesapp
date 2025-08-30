import React, { useState, useCallback, createContext } from "react";
import { FantasyMovie } from "../types/interfaces";

// Define the context interface
interface FantasyMoviesContextInterface {
  fantasyMovies: FantasyMovie[];
  addFantasyMovie: (movie: FantasyMovie) => void;
}

// Initial state for context
const initialContextState: FantasyMoviesContextInterface = {
  fantasyMovies: [],
  addFantasyMovie: () => {},
};

// Create the context
export const FantasyMoviesContext = createContext<FantasyMoviesContextInterface>(initialContextState);

// Create the provider
const FantasyMoviesContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [fantasyMovies, setFantasyMovies] = useState<FantasyMovie[]>([]);

  const addFantasyMovie = useCallback((movie: FantasyMovie) => {
    setFantasyMovies((prevMovies) => [...prevMovies, movie]);
  }, []);

  return (
    <FantasyMoviesContext.Provider value={{ fantasyMovies, addFantasyMovie }}>
      {children}
    </FantasyMoviesContext.Provider>
  );
};

export default FantasyMoviesContextProvider;
