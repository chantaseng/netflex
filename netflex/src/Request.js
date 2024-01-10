const key = import.meta.env.VITE_REACT_APP_API_KEY;

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1${key}`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1${key}`,
  requestTrending: `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2${key}`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1${key}`,
  requestHorror: `https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&with_genres=27${key}`,
  requestAction: `https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&with_genres=28${key}`,
  requestRomance: `https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&with_genres=10749${key}`,
  requestHistory: `https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&with_genres=36${key}`,
};

export default requests;
