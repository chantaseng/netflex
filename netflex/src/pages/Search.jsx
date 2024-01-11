import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Movie from '../components/Movie';

function Search({ results, input }) {
  function slideLeft() {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  function slideRight() {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <>
      <h2 className="p-4 font-bold text-white md:text-xl">Search: {input}</h2>
      <div className="group relative flex items-center">
        <div
          id={'slider'}
          className="relative h-full w-full overflow-x-scroll scroll-smooth scrollbar-hide"
        >
          {results.map((movie, id) => (
            <Movie movie={movie} key={id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Search;
