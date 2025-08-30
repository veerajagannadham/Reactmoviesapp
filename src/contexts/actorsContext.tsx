import React, { createContext, useState } from "react";
import { ActorProps } from "../types/interfaces"; // Ensure this interface is defined

interface ActorsContextProps {
  favourites: ActorProps[];
  addToFavourites: (actor: ActorProps) => void;
}

export const ActorsContext = createContext<ActorsContextProps | undefined>(undefined);

export const ActorsContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favourites, setFavourites] = useState<ActorProps[]>([]);

  const addToFavourites = (actor: ActorProps) => {
    if (!favourites.some((fav) => fav.id === actor.id)) {
      setFavourites((prev) => [...prev, actor]);
    }
  };

  return (
    <ActorsContext.Provider value={{ favourites, addToFavourites }}>
      {children}
    </ActorsContext.Provider>
  );
};