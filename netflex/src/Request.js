const key = import.meta.env.VITE_REACT_APP_API_KEY;

const requests = {
  requestTrendingMovie: `https://api.themoviedb.org/3/trending/movie/day?language=en-US${key}`,
  requestAction: `https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&with_genres=28${key}`,
  requestTop10Movie: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=2${key}`,
  requestCriticallyAcclaimed: `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1${key}`,
  requestComedy: `https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&with_genres=35${key}`,
  requestHorror: `https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&with_genres=27${key}`,
  requestTrendingSerie: `https://api.themoviedb.org/3/trending/tv/day?language=en-US${key}`,
  requestActionSerie: `https://api.themoviedb.org/3/discover/tv?language=en-US&page=1&with_genres=10759${key}`,
  // requestTop10Serie: `https://api.themoviedb.org/3/tv/popular?language=en-US&page=1${key}`,
  requestAnimeSerie: `https://api.themoviedb.org/3/discover/tv?language=en-US&page=1&with_genres=16${key}`,
  requestCrimeSerie: `https://api.themoviedb.org/3/discover/tv?language=en-US&page=1&with_genres=80${key}`,
  requestHistorySerie: `https://api.themoviedb.org/3/discover/tv?language=en-US&page=1&with_genres=10768${key}`,
  requestScifi: `https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&with_genres=878${key}`,
};

export default requests;
