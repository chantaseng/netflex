import axios from 'axios';
import { useEffect, useState } from 'react';
import requests from '../Request';

function Main() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);

  useEffect(function () {
    axios
      .get(requests.requestPopular)
      .then((res) => setMovies(res.data.results));
  }, []);

  useEffect(() => {
    setMovie(movies[Math.floor(Math.random() * movies.length)]);
  }, [movies]);

  const truncateString = function (str, num) {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };
  // console.log(movie);

  return (
    <>
      <div className="h-[550px] w-full text-white">
        <div className="h-full w-full">
          <div className="absolute h-[550px] w-full bg-gradient-to-r from-black"></div>
          <img
            className="h-full w-full object-cover"
            src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
            alt={movie?.title}
          />
          <div className="absolute top-[20%] w-full p-4 md:p-8">
            <h1 className="text-3xl font-bold md:text-5xl">{movie?.title}</h1>
            <div className="my-4">
              <button className="border border-gray-300 bg-gray-300 px-5 py-2 text-black">
                Play
              </button>
              <button className="ml-4 border border-gray-300 px-5 py-2 text-white">
                Watch Later
              </button>
            </div>
            <p className="text-sm text-gray-400">
              Released Date: {movie?.release_date}
            </p>
            <p className="w-full text-gray-200 md:max-w-[60%] lg:max-w-[50%] xl:max-w-[35%]">
              {truncateString(movie?.overview, 150)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
