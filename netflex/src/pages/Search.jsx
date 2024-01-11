import SearchedMovies from '../components/SearchedMovies';

function Search({ results, input }) {
  return (
    <>
      <div className="mt-[72px]">
        <h2 className="p-4 font-bold text-white md:text-xl">Search: {input}</h2>
        <div className="group relative flex items-center">
          <div
            // id={'slider'}
            className="relative h-full w-full overflow-x-scroll scroll-smooth scrollbar-hide"
          >
            {results.map((movie, id) => {
              console.log(movie);
              return <SearchedMovies movie={movie} key={id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
