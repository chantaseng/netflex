import { useEffect, useState } from 'react';
import SearchedMovies from '../components/SearchedMovies';

function Search({ results, userSearchInput, setUserSearchInput }) {
  const [searchbarInput] = useState(userSearchInput);

  useEffect(() => {
    const resetInput = setTimeout(() => {
      setUserSearchInput('');
    }, 1500);

    return () => clearTimeout(resetInput);
  }, []);

  return (
    <>
      <div className="mt-[72px]">
        <h2 className="p-4 font-bold text-white md:text-xl">
          Search: {searchbarInput}
        </h2>
        <div className="group relative flex items-center">
          <div
            // id={'slider'}
            className="relative h-full w-full overflow-x-scroll scroll-smooth scrollbar-hide"
          >
            {results.map((movie, id) => {
              // console.log(movie);
              return <SearchedMovies movie={movie} key={id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
