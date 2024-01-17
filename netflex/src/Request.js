const key = import.meta.env.VITE_REACT_APP_API_KEY;

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1${key}`,
  requestCriticallyAcclaimed: `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1${key}`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1${key}`,
  requestHorror: `https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&with_genres=27${key}`,
  requestAction: `https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&with_genres=28${key}`,
  requestComedy: `https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&with_genres=35${key}`,
  requestRomance: `https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&with_genres=10749${key}`,
  requestHistory: `https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&with_genres=36${key}`,
  requestScifi: `https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&with_genres=878${key}`,
  requestTrendingMovie: `https://api.themoviedb.org/3/trending/movie/day?language=en-US${key}`,
  requestTrendingSerie: `https://api.themoviedb.org/3/trending/tv/day?language=en-US${key}`,
  requestActionSerie: `https://api.themoviedb.org/3/discover/tv?language=en-US&page=1&with_genres=10759${key}`,
  requestAnimeSerie: `https://api.themoviedb.org/3/discover/tv?language=en-US&page=1&with_genres=16${key}`,
  requestSoapSerie: `https://api.themoviedb.org/3/discover/tv?language=en-US&page=1&with_genres=10766${key}`,
  requestHistorySerie: `https://api.themoviedb.org/3/discover/tv?language=en-US&page=1&with_genres=10768${key}`,
};

export default requests;
