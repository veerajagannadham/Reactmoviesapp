import React, { MouseEvent, useContext } from "react";
import { ActorsContext } from "../../contexts/actorsContext"; 
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ActorProps } from "../../types/interfaces"; 
const AddToActorFavouritesIcon: React.FC<ActorProps> = (actor) => {
  const context = useContext(ActorsContext);

  if (!context) {
    throw new Error("AddToActorFavouritesIcon must be used within an ActorsContextProvider");
  }

  const onUserSelect = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    context.addToFavourites(actor); 
  };

  return (
    <IconButton aria-label="add to favorites" onClick={onUserSelect}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToActorFavouritesIcon;