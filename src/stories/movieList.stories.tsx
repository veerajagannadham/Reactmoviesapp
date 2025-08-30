import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import MovieList from "../components/movieList";
import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import Grid from "@mui/material/Grid";
import MoviesContextProvider from "../contexts/moviesContext";

const meta: Meta<typeof MovieList> = {
  title: "Components/MovieList",
  component: MovieList,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
    (Story) => (
      <MoviesContextProvider>
        <Story />
      </MoviesContextProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const movies = [
      { ...SampleMovie, id: 1 },
      { ...SampleMovie, id: 2 },
      { ...SampleMovie, id: 3 },
      { ...SampleMovie, id: 4 },
      { ...SampleMovie, id: 5 },
    ];
    return (
      <Grid container spacing={5}>
        <MovieList
          movies={movies}
          action={(movie) => <AddToFavouritesIcon {...movie} />}
        />
      </Grid>
    );
  },
};
Default.storyName = "Default";

export const EmptyList: Story = {
  render: () => (
    <Grid container spacing={5}>
      <MovieList
        movies={[]}
        action={() => <AddToFavouritesIcon id={0} title="" budget={0} homepage="" release_date="" revenue={0} runtime={0} tagline="" vote_average={0} vote_count={0} poster_path="" overview="" imdb_id="" original_language="" popularity={0} />}
      />
    </Grid>
  ),
};
EmptyList.storyName = "Empty List";


