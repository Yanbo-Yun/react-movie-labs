import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import { getUpcomingMovies } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const UpcomingMoviesPage = () => {
  const { data, error, isLoading, isError } = useQuery("upcomingMovies", getUpcomingMovies);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  const movies = data.results;

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <PlaylistAddIcon />
          </>
        );
      }}
    />
  );
};

export default UpcomingMoviesPage;
