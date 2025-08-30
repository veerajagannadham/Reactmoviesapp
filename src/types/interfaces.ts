export interface BaseMovieProps {
  title: string;
  budget: number;
  homepage: string | undefined;
  id: number;
  imdb_id: string;
  original_language: string;
  overview: string;
  release_date: string;
  vote_average: number;
  popularity: number;
  poster_path?: string;
  tagline: string;
  runtime: number;
  revenue: number;
  vote_count: number;
  favourite?: boolean;
  genre_ids?: number[];
}

export interface BaseMovieListProps {
  movies: BaseMovieProps[];
  action: (m: BaseMovieProps) => React.ReactNode;
}

export interface MovieDetailsProps extends BaseMovieProps {
  genres: {
    id: number;
    name: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
}

export interface MovieImage {
  file_path: string;
  aspect_ratio?: number; //some props are optional...
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

export interface MoviePageProps {
  movie: MovieDetailsProps;
  images: MovieImage[];
}

export interface ListedMovie {
  id: number;
  title: string;
  overview: string;
  poster_path?: string;
  vote_average: number;
  genre_ids: number[];
  release_date: string;
}
export type FilterOption = "title" | "genre" | "language";

export interface MovieListPageTemplateProps extends BaseMovieListProps {
  title: string;
}

export interface Review {
  id: string;
  content: string;
  author: string;
}

export interface GenreData {
  genres: {
    id: string;
    name: string;
  }[];
}

export interface DiscoverMovies {
  page: number;
  total_pages: number;
  total_results: number;
  results: BaseMovieProps[];
}

export interface Review {
  author: string;
  content: string;
  agree: boolean;
  rating: number;
  movieId: number;
}

export interface ActorProps {
  id: number;
  name: string;
  profile_path?: string;
  popularity: number;
  known_for_department: string;
  gender: number;
  known_for: {
    id: number;
    title?: string;
    name?: string;
    poster_path?: string;
    media_type: string;
  }[];
}

export interface ActorListProps {
  actors: ActorProps[];
}

export interface ActorListTemplateProps {
  title: string;
  actors: ActorProps[];
  action?: (m: ActorProps) => React.ReactNode;
}

export interface DiscoverActors {
  page: number;
  total_pages: number;
  total_results: number;
  results: ActorProps[];
}

export interface ActorProfile {
  id: number;
  imdb_id: string;
  birthday: string;
  deathday: string | null;
  name: string;
  also_known_as: string[];
  gender: number;
  biography: string;
  popularity: number;
  place_of_birth: string;
  profile_path: string | null;
  adult: boolean;
  homepage: string | null;
}

export interface ActorProfileForImages {
  id: number;
  profiles: {
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1: string | null;
    vote_average: number;
    vote_count: number;
    width: number;
  }[];
}

export interface ActorDetailsProps {
  id: number;
  name: string;
  biography: string;
  birthday: string;
  deathday: string | null;
  place_of_birth: string;
  profile_path: string | null;
  imdb_id: string;
  homepage: string | null;
  popularity: number;
  known_for_department: string;
  also_known_as: string[];
  gender: number;
}

export interface ActorImagesProps {
  profiles: {
    file_path: string;
    aspect_ratio: number;
    height: number;
    width: number;
  }[];
}

export interface ActorPageProps {
  actor: ActorDetailsProps;
  images: ActorImagesProps;
}

// src/types/interfaces.ts
export interface CastMember {
  name: string;
  role: string;
  description: string;
}

export interface FantasyMovie {
  title: string;
  overview: string;
  genre: string;
  releaseDate: string;
  runTime: number;
  productionCompanies: string;
  cast: CastMember[];
}

export interface SignInFormData {
  username: string;
  password: string;
}

export interface SignInResults {
  message: string;
  token: string;
}
