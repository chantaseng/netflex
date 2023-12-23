import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

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

  function slideLeft() {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  function slideRight() {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <>
      <h2 className="p-4 font-bold text-white md:text-xl">{title}</h2>
      <div className="group relative flex items-center">
        <MdChevronLeft
          onClick={slideLeft}
          className="absolute left-0 z-10 hidden cursor-pointer rounded-full bg-white opacity-50 hover:opacity-100 group-hover:block"
          size={40}
        />
        <div
          id={"slider"}
          className="relative h-full w-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide"
        >
          {movies.map((movie, id) => (
            <Movie movie={movie} key={id} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="absolute right-0 z-10 hidden cursor-pointer rounded-full bg-white opacity-50 hover:opacity-100 group-hover:block"
          size={40}
        />
      </div>
    </>
  );
}

export default Row;
