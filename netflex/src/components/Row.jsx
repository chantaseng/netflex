import axios from 'axios';
import { useEffect, useState } from 'react';
import Movie from './Movie';
import Serie from './Serie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function Row({ title, fetchURL, fetchSeriesURL, rowID }) {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [id, setId] = useState(null);

  useEffect(
    function () {
      axios.get(fetchURL).then((res) => {
        setMovies(res.data.results);
        setId(1);
      });
    },
    [fetchURL],
  );
  // console.log(movies);

  useEffect(
    function () {
      axios.get(fetchSeriesURL).then((res) => {
        console.log(res.data.results);
        setSeries(res.data.results);
        setId(2);
      });
    },
    [fetchSeriesURL],
  );
  // console.log(series);

  function slideLeft() {
    const slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  function slideRight() {
    const slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <>
      <h2 className="p-4 font-bold text-white md:text-xl">{title}</h2>
      <div className="group relative flex items-center">
        <MdChevronLeft
          onClick={slideLeft}
          className="absolute left-2 z-10 hidden cursor-pointer rounded-full bg-white opacity-50 hover:opacity-100 group-hover:block"
          size={40}
        />
        <div
          id={'slider' + rowID}
          className="relative h-full w-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide"
        >
          {id === 1
            ? movies.map((movie, id) => <Movie movie={movie} key={id} />)
            : series.map((serie, id) => <Serie serie={serie} key={id} />)}
          {/* {movies.map((movie, id) => (
            <Movie movie={movie} key={id} />
          ))} */}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="absolute right-2 z-10 hidden cursor-pointer rounded-full bg-white opacity-50 hover:opacity-100 group-hover:block"
          size={40}
        />
      </div>
    </>
  );
}

export default Row;
