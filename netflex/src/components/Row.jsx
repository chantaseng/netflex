import axios from "axios";
import { useEffect, useState } from "react";

function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  useEffect(
    function () {
      axios.get(fetchURL).then((res) => {
        setMovies(res.data.results);
      });
    },
    [fetchURL],
  );
  console.log(movies);

  return (
    <>
      <h2 className="p-4 font-bold text-white md:text-xl">{title}</h2>
      <div className="relative flex items-center">
        <div className={"slider"}>
          {movies.map((movie, id) => (
            <div
              className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]"
              key={movie?.id}
            >
              <img
                className="block h-auto w-full"
                src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
                alt={movie?.title}
              />
              <div className="absolute left-0 top-0 h-full w-full text-white  opacity-0 hover:bg-black/80 hover:opacity-100">
                <p className="flex h-full items-center justify-center whitespace-normal text-center text-xs font-bold md:text-sm">
                  {movie?.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Row;
