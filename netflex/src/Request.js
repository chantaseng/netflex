const key = import.meta.env.VITE_REACT_APP_API_KEY;

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=2`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&page=1&with_genres=27`,
  requestAction: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&page=1&with_genres=28`,
  requestRomance: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&page=1&with_genres=10749`,
  requestHistory: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&page=1&with_genres=36`,
};

export default requests;
