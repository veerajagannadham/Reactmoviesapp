import React, { useState } from "react";
import { useQuery } from "react-query";
import ActorListPageTemplate from "../components/actorListPageTemplate";
import { getActorsList } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import { ActorProps } from "../types/interfaces";

const ActorsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const {
    data,
    error,
    isLoading,
    isError,
    isFetching,
  } = useQuery<{ results: ActorProps[]; total_pages: number }, Error>(
    ["popularActors", currentPage],
    () => getActorsList(currentPage),
    {
      keepPreviousData: true,
      staleTime: 5 * 60 * 1000,
      cacheTime: 24 * 60 * 60 * 1000,
    }
  );

  if (isLoading) return <Spinner />;
  if (isError) return <div>Error: {error.message}</div>;

  const handleNextPage = () => {
    if (data && currentPage < data.total_pages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <ActorListPageTemplate
        title={`Popular Actors - Page ${currentPage}`}
        actors={data?.results || []}
      />
      <div style={{ display: "flex", justifyContent: "center", margin: "1rem" }}>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          style={{ marginRight: "1rem" }}
        >
          Previous
        </button>
        <span>Page {currentPage} {isFetching && ' (Loading...)'}</span>
        <button
          onClick={handleNextPage}
          disabled={data && currentPage === data.total_pages}
          style={{ marginLeft: "1rem" }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ActorsPage;