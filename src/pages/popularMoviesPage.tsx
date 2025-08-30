import React, { useState } from "react";
import { useQuery } from "react-query";
import PageTemplate from '../components/templateMovieListPage';
import { getPopularMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import AddToFavourites from "../components/cardIcons/addToFavourites";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";
import { BaseMovieProps, DiscoverMovies } from "../types/interfaces";
import Pagination from "../components/pagination";
import useFiltering from "../hooks/useFiltering";
import MovieFilterUI, {
  titleFilter,
  genreFilter,
  languageFilter, 
} from "../components/movieFilterUI";

// Filter configurations
const titleFiltering = {
  name: "title",
  value: "",
  condition: titleFilter,
};
const genreFiltering = {
  name: "genre",
  value: "0",
  condition: genreFilter,
};
const languageFiltering = {
  name: "language",
  value: "all", 
  condition: languageFilter,
};

const PopularMoviesPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, isLoading, isError } = useQuery<DiscoverMovies, Error>(
    ['popularMovies', currentPage],
    () => getPopularMovies(currentPage),
    {
      staleTime: 5 * 60 * 1000, 
      cacheTime: 60 * 60 * 1000, 
      keepPreviousData: true,
    }
  );

  const { filterValues, setFilterValues, filterFunction } = useFiltering([
    titleFiltering,
    genreFiltering,
    languageFiltering, 
  ]);

  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value };
    const updatedFilterSet =
      type === "title"
        ? [changedFilter, filterValues[1], filterValues[2]]
        : type === "genre"
        ? [filterValues[0], changedFilter, filterValues[2]]
        : [filterValues[0], filterValues[1], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  if (isLoading) return <Spinner />;
  if (isError) return <div>Error: {error.message}</div>;

  const movies = data?.results || [];
  const displayedMovies = filterFunction(movies);

  return (
    <>
      <PageTemplate
        title='Popular Movies'
        movies={displayedMovies}
        action={(movie: BaseMovieProps) => (
          <>
            <AddToFavourites {...movie} />
            <AddToPlaylistIcon {...movie} />
          </>
        )}
      />
      <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
        languageFilter={filterValues[2].value} 
      />
      <Pagination
        currentPage={currentPage}
        totalPages={data?.total_pages || 1}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default PopularMoviesPage;