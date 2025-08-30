// import React, { MouseEvent, useContext } from "react";
// import { ActorsContext } from "../../contexts/actorsContext";
// import IconButton from "@mui/material/IconButton";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import { ActorProps } from "../../types/interfaces";

// const RemoveFromActorFavourites: React.FC<ActorProps> = (actor) => {
//   const context = useContext(ActorsContext);

//   if (!context) {
//     throw new Error(
//       "RemoveFromActorFavourites must be used within an ActorsContextProvider"
//     );
//   }

//   const onUserSelect = (e: MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     context.removeFromFavourites(actor); // Remove the actor from favorites
//   };

//   return (
//     <IconButton aria-label="remove from favorites" onClick={onUserSelect}>
//       <FavoriteIcon color="secondary" fontSize="large" />
//     </IconButton>
//   );
// };

// export default RemoveFromActorFavourites;