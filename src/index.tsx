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
        <SiteHeader />
          <MoviesContextProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
              <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
            </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

