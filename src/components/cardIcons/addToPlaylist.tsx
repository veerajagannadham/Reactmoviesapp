import React, { MouseEvent, useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { BaseMovieProps } from "../../types/interfaces";

const AddToPlaylistIcon: React.FC<BaseMovieProps> = (movie) => {
  const context = useContext(MoviesContext);

  const onUserSelect = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    context.addToMustWatch(movie);
  };

  return (
    <IconButton 
      aria-label="add to must watch" 
      onClick={onUserSelect}
      color="primary"
    >
      <PlaylistAddIcon fontSize="large" />
    </IconButton>
  );
};

export default AddToPlaylistIcon;