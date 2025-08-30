import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ActorDetails from "../components/actorDetailsPage";
import { MemoryRouter } from "react-router";
import { ActorDetailsProps } from "../types/interfaces";

const meta: Meta<typeof ActorDetails> = {
  title: "Components/ActorDetails",
  component: ActorDetails,
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

const sampleActor: ActorDetailsProps = {
  id: 1,
  name: "Leonardo DiCaprio",
  biography:
    "Leonardo Wilhelm DiCaprio is an American actor and film producer. Known for his work in biopics and period films, he has received numerous accolades, including an Academy Award and three Golden Globe Awards.",
  birthday: "1974-11-11",
  deathday: null,
  place_of_birth: "Los Angeles, California, USA",
  profile_path: "/path/to/profile.jpg",
  imdb_id: "nm0000138",
  homepage: "https://www.leonardodicaprio.com",
  popularity: 98.7,
  known_for_department: "Acting",
  also_known_as: ["Leo", "Leonardo Wilhelm DiCaprio"],
  gender: 2,
};

export const Default: Story = {
  args: sampleActor,
};
Default.storyName = "Default";

const actorWithoutBiography: ActorDetailsProps = {
  ...sampleActor,
  biography: "",
};

export const NoBiography: Story = {
  args: actorWithoutBiography,
};
NoBiography.storyName = "No Biography";

const deceasedActor: ActorDetailsProps = {
  ...sampleActor,
  deathday: "2023-01-01",
};

export const DeceasedActor: Story = {
  args: deceasedActor,
};
DeceasedActor.storyName = "Deceased Actor";