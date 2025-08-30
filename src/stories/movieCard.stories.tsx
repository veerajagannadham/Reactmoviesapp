import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import MovieCard from "../components/movieCard";
import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import { UserProvider } from "../contexts/userContext";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const meta: Meta<typeof MovieCard> = {
  title: "Components/MovieCard",
  component: MovieCard,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
    (Story) => (
      <MoviesContextProvider>
        <UserProvider>{Story()}</UserProvider>
      </MoviesContextProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    movie: SampleMovie,
    action: (movie: typeof SampleMovie) => <AddToFavouritesIcon {...movie} />,
  },
};
Default.storyName = "Default";

const sampleNoPoster = { ...SampleMovie, poster_path: undefined };
interface NoPosterArgs {
  movie: typeof sampleNoPoster;
  action: (movie: typeof sampleNoPoster) => JSX.Element;
}

export const NoPoster: Story = {
  args: {
    movie: sampleNoPoster,
    action: (movie: typeof sampleNoPoster) => <AddToFavouritesIcon {...movie} />,
  } as NoPosterArgs,
};
NoPoster.storyName = "No Poster";

const sampleHighRating = { ...SampleMovie, vote_average: 9.8 };
export const HighRating: Story = {
  args: {
    movie: sampleHighRating,
    action: (movie: typeof sampleLowRating) => <AddToFavouritesIcon {...movie} />,
  },
};
HighRating.storyName = "High Rating";

const sampleLowRating = { ...SampleMovie, vote_average: 2.3 };
export const LowRating: Story = {
  args: {
    movie: sampleLowRating,
    action: (movie: typeof sampleLowRating) => <AddToFavouritesIcon {...movie} />,
  },
};
LowRating.storyName = "Low Rating";

const sampleInPlaylist = { ...SampleMovie, id: 12345 };
export const InPlaylist: Story = {
  args: {
    movie: sampleInPlaylist,
    action: (movie: typeof sampleInPlaylist) => <AddToFavouritesIcon {...movie} />,
  },
  decorators: [
    (Story) => (
      <MoviesContextProvider>
        <UserProvider>
          <Story />
        </UserProvider>
      </MoviesContextProvider>
    ),
  ],
};
InPlaylist.storyName = "In Playlist";