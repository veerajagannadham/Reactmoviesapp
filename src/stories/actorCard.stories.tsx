import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ActorCard from "../components/actorCard";
import { MemoryRouter } from "react-router";
import { ActorProps } from "../types/interfaces";

const meta: Meta<typeof ActorCard> = {
  title: "Components/ActorCard",
  component: ActorCard,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

const sampleActor: ActorProps = {
  id: 1,
  name: "Leonardo DiCaprio",
  profile_path: "/path/to/profile.jpg",
  popularity: 98.7,
  known_for_department: "Acting",
  gender: 2,
  known_for: [
    {
      id: 1,
      title: "Inception",
      media_type: "movie",
      poster_path: "/poster1.jpg",
    },
    {
      id: 2,
      title: "The Revenant",
      media_type: "movie",
      poster_path: "/poster2.jpg",
    },
  ],
};

export const Default: Story = {
  args: {
    actor: sampleActor,
  },
};
Default.storyName = "Default";

const actorWithoutImage: ActorProps = {
  ...sampleActor,
  profile_path: undefined,
};

export const NoImage: Story = {
  args: {
    actor: actorWithoutImage,
  },
};
NoImage.storyName = "No Image";

const lowPopularityActor: ActorProps = {
  ...sampleActor,
  popularity: 5.3,
};

export const LowPopularity: Story = {
  args: {
    actor: lowPopularityActor,
  },
};
LowPopularity.storyName = "Low Popularity";