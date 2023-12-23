import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./Movie";

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
  // console.log(movies);

  return (
    <>
      <h2 className="p-4 font-bold text-white md:text-xl">{title}</h2>
      <div className="relative flex items-center">
        <div className={"slider"}>
          {movies.map((movie, id) => (
            <Movie movie={movie} key={id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Row;
