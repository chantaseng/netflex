import axios from 'axios';
import { useEffect, useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';

function Searchbar({ setResults, userSearchInput, setUserSearchInput }) {
  const [showSearchbar, setShowSearchbar] = useState(false);
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const key = import.meta.env.VITE_REACT_APP_API_KEY;

  // when i click on magnifying glass, search bar appears
  const handleClick = function () {
    setShowSearchbar((searchbar) => !searchbar);
  };

  const handleChange = function (e) {
    setUserSearchInput(e.target.value);
    // console.log(userSearchInput);
  };

  // Works but main component still fetches at every key stroke
  const fetchMovies = async function () {
    if (userSearchInput !== '')
      try {
        await axios
          .get(
            `https://api.themoviedb.org/3/search/movie?query=${userSearchInput}${key}`,
          )
          .then((res) => setMovies(res.data.results));
      } catch (error) {
        console.log(error.message);
      }
    setResults(movies);
  };

  const handleSubmit = async function (e) {
    e.preventDefault();

    try {
      await fetchMovies();
    } catch (error) {
      console.log(error.message);
    }
    handleClick();
    navigate('/search');
    setUserSearchInput('');
  };

  useEffect(() => {
    fetchMovies();
  }, [userSearchInput]);

  return (
    <>
      <div className="pr-4 text-xl font-bold text-white" onClick={handleClick}>
        {showSearchbar ? (
          <>
            <div className="relative flex items-center justify-center">
              <div className="absolute left-1 z-10">
                <GoSearch />
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Movie, series, genres"
                  className="rounded bg-black pl-7 placeholder-gray-600 placeholder:text-sm"
                  autoFocus
                  onChange={handleChange}
                  value={userSearchInput}
                />
              </form>
            </div>
          </>
        ) : (
          <GoSearch />
        )}
      </div>
    </>
  );
}

export default Searchbar;
