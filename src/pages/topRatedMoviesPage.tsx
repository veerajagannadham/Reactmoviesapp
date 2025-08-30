import React, { useState } from "react";
import { useQuery } from "react-query";
import PageTemplate from "../components/templateMovieListPage";
import { getTopRatedMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import AddToFavourites from "../components/cardIcons/addToFavourites";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";
import { BaseMovieProps } from "../types/interfaces";
import useFiltering from "../hooks/useFiltering";
import MovieFilterUI, {
  titleFilter,
  genreFilter,
  languageFilter, 
} from "../components/movieFilterUI";
import Pagination from "../components/pagination"; 


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

const TopRatedMoviesPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data,
    error,
    isLoading,
    isError,
    isFetching,
  } = useQuery<{ results: BaseMovieProps[]; total_pages: number }, Error>(
    ["topRatedMovies", currentPage],
    () => getTopRatedMovies(currentPage),
    {
      keepPreviousData: true,
      staleTime: 5 * 60 * 1000,
      cacheTime: 24 * 60 * 60 * 1000,
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

  const displayedMovies = filterFunction(data?.results || []);

  return (
    <>
      <PageTemplate
        title={`Top Rated Movies - Page ${currentPage}`}
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
        onPageChange={(page: number) => setCurrentPage(page)}
      />
      {isFetching && <div style={{ textAlign: "center" }}>Loading...</div>}
    </>
  );
};

export default TopRatedMoviesPage;
