import SiteHeader from './components/siteHeader'
import MovieReviewPage from "./pages/movieReviewPage";
import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import UpcomingMoviesPage from './pages/upcomingmoviesPage';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import FantasyMoviesContextProvider from "./contexts/fantasyMoviesContext";
import FantasyMoviePage from "./pages/fantasyMoviePage";
import FantasyMovieShowPage from "./pages/fantasyMovieShowPage";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import PopularMoviesPage from './pages/popularMoviesPage';
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import ActorsPage from "./pages/actorsPage";
import ActorDetailsPage from "./pages/actorDetailsPage";
import SignInPage from "./pages/signInPage";
import ReviewsPage from "./pages/getTmdbReviews";
import { UserProvider } from "./contexts/userContext";
import { ActorsContextProvider } from "./contexts/actorsContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});



const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <UserProvider>
          <FantasyMoviesContextProvider>
          
        <ActorsContextProvider>
          <SiteHeader />
            <MoviesContextProvider>
              <Routes>
              <Route path="/" element={<HomePage />} />
                  <Route path="/movies/:id" element={<MoviePage />} />
                  <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
                  <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
                  <Route path="/reviews/:id" element={<MovieReviewPage/>} />
                  <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
                  <Route path="/movies/popular" element={<PopularMoviesPage />} />
                  <Route path="/movies/top-rated" element={<TopRatedMoviesPage />} />
                  <Route path="/actors" element={<ActorsPage />} />
                  <Route path="/actors/:id" element={<ActorDetailsPage />} />
                  <Route path="/fantasy" element={<FantasyMoviePage />} />
                  <Route path="/fantasyshow" element={<FantasyMovieShowPage />} />
                  <Route path="/signin" element={<SignInPage />} />
                  <Route path="*" element={<Navigate to="/" />} />
                  <Route path="/myfavouritereviews" element={<ReviewsPage />} />
              </Routes>
          </MoviesContextProvider>
          </ActorsContextProvider>
          </FantasyMoviesContextProvider>
          </UserProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

