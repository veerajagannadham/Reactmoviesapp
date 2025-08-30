import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import FilterMoviesCard from "../components/filterMoviesCard";
import { MemoryRouter } from "react-router";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

const meta: Meta<typeof FilterMoviesCard> = {
  title: "Components/FilterMoviesCard",
  component: FilterMoviesCard,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof FilterMoviesCard>;

export const Default: Story = {
  args: {
    onUserInput: (filterOption, value) => {
      console.log(`Filter option: ${filterOption}, Value: ${value}`);
    },
    titleFilter: "",
    genreFilter: "0",
    languageFilter: "en",
  },
};

export const WithTitleFilter: Story = {
  args: {
    onUserInput: (filterOption, value) => {
      console.log(`Filter option: ${filterOption}, Value: ${value}`);
    },
    titleFilter: "Inception",
    genreFilter: "0",
    languageFilter: "en",
  },
};

export const WithGenreFilter: Story = {
  args: {
    onUserInput: (filterOption, value) => {
      console.log(`Filter option: ${filterOption}, Value: ${value}`);
    },
    titleFilter: "",
    genreFilter: "28", // Example genre ID for "Action"
    languageFilter: "en",
  },
};

export const WithLanguageFilter: Story = {
  args: {
    onUserInput: (filterOption, value) => {
      console.log(`Filter option: ${filterOption}, Value: ${value}`);
    },
    titleFilter: "",
    genreFilter: "0",
    languageFilter: "es", // Spanish
  },
};

export const CombinedFilters: Story = {
  args: {
    onUserInput: (filterOption, value) => {
      console.log(`Filter option: ${filterOption}, Value: ${value}`);
    },
    titleFilter: "Avengers",
    genreFilter: "12", // Example genre ID for "Adventure"
    languageFilter: "fr", // French
  },
};