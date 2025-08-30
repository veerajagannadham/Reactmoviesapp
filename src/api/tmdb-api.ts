export const getMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  ).then((response) => {
    if (!response.ok)
      throw new Error(`Unable to fetch movies. Response status: ${response.status}`);
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};
  
  export const getMovie = (id: string) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to get movie data. Response status: ${response.status}`);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

  
  export const getGenres = () => {
  return fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" + import.meta.env.VITE_TMDB_KEY + "&language=en-US"
  ).then( (response) => {
    if (!response.ok)
      throw new Error(`Unable to fetch genres. Response status: ${response.status}`);
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

  
   export const getMovieImages = (id: string | number) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("failed to fetch images");
    }
    return response.json();
  }).then((json) => json.posters)
    .catch((error) => {
      throw error
    });
};

  export const getMovieReviews = (id: string | number) => { //movie id can be string or number
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };
export const getUpcomingMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

export const getPopularMovies = (page = 1) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }&page=${page}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(
        `Failed to fetch popular movies. Status: ${response.status}`
      );
    }
    return response.json();
  });
};

export const getTopRatedMovies = (page: number = 1) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }&page=${page}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Failed to fetch top-rated movies. Status: ${response.status}`
        );
      }
      return response.json();
    })
    .then((data) => {
      return {
        results: data.results,
        total_pages: data.total_pages,
        total_results: data.total_results,
      };
    })
    .catch((error) => {
      console.error("Error fetching top-rated movies:", error);
      throw error;
    });
};

export const getActorImages = (actorId: number) => {
  return fetch(
    `https://api.themoviedb.org/3/person/${actorId}/images?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }`
  ).then((response) => {
    if (!response.ok) throw new Error(`Failed to fetch actor images`);
    return response.json();
  });
};

export const getActorDetails = (actorId: number) => {
  return fetch(
    `https://api.themoviedb.org/3/person/${actorId}?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }`
  ).then((response) => {
    if (!response.ok) throw new Error(`Failed to fetch actor details`);
    return response.json();
  });
};

export const getActorsList = (page: number = 1) => {
  return fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }&page=${page}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch actors. Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      return {
        results: data.results,
        total_pages: data.total_pages,
        total_results: data.total_results,
      };
    })
    .catch((error) => {
      console.error("Error fetching actors:", error);
      throw error;
    });
};
