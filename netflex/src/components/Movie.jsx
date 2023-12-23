import { useEffect, useState } from "react";

function Movie() {
  const [movies, setMovies] = useState([]);

  function getMovie() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=11e586945712cd25b4a70754556d9313",
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movies);

  return (
    <div className="grid grid-cols-6">
      {movies.map((movie) => (
        <img
          className="w-60"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          key={movie.id}
        />
      ))}
    </div>
  );
}

export default Movie;
