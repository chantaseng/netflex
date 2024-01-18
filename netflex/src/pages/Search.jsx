import { useEffect, useState } from 'react';
import SearchedMovies from '../components/SearchedMovies';

function Search({ results, userSearchInput, setUserSearchInput }) {
  const [searchbarInput] = useState(userSearchInput);
  const [formSubmitted, setFormSubmitted] = useState(false);
  // console.log(searchbarInput);

  // To reset searchbarInput when you search another title on search page(does not work)
  // useEffect(() => {
  //   if (formSubmitted) {
  //     const reset = () => {
  //       searchbarInput('');
  //     };
  //   }
  // }, [formSubmitted]);

  // useEffect(() => {
  //   const resetInput = setTimeout(() => {
  //     setUserSearchInput('');
  //   }, 1000);

  //   return () => clearTimeout(resetInput);
  // }, []);

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
              return (
                <SearchedMovies
                  movie={movie}
                  key={id}
                  searchbarInput={searchbarInput}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
