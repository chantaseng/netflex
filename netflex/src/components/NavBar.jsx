import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { GoSearch } from 'react-icons/go';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Navbar() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const [showSearchbar, setShowSearchbar] = useState(false);
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [submit, setSubmit] = useState(false);
  // console.log(user.email);

  const key = import.meta.env.VITE_REACT_APP_API_KEY;

  const handleLogout = async function () {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  // when i click on magnifying glass, search bar appears
  const handleClickSearchbar = function () {
    setShowSearchbar((searchbar) => !searchbar);
  };

  // THIS WORKS, BUT WHEN I TYPE 'THOR' IN THE INPUT, IT IS ONLY GOING TO FETCH FOR 'THO'. WHY??
  // const fetchMovies = async function () {
  //   try {
  //     await axios
  //       .get(`https://api.themoviedb.org/3/search/movie?query=${search}${key}`)
  //       .then((res) => setMovies(res.data.results));
  //     // console.log(movies);
  //     // console.log(search);
  //     // console.log(key);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // const handleSubmit = async function (e) {
  //   e.preventDefault();

  //   try {
  //     await fetchMovies();
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // useEffect(() => {
  //   if (search !== '') {
  //     fetchMovies();
  //   }
  // }, [search]);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);
  }

  useEffect(() => {
    const fetchMovies = async function () {
      try {
        await axios
          .get(
            `https://api.themoviedb.org/3/search/movie?query=${search}${key}`,
          )
          .then((res) => setMovies(res.data.results));
        // console.log(movies);
        // console.log(search);
        // console.log(key);
      } catch (error) {
        console.log(error.message);
      }
    };

    if (submit) {
      fetchMovies();
      setSubmit(false);
      navigate('/search');
    }
  }, [search, key, submit]);

  return (
    <div className="absolute z-[100] flex w-full items-center justify-between p-4">
      <Link to="/">
        <h1 className="cursor-pointer text-4xl font-bold text-red-600">
          NETFLEX
        </h1>
      </Link>
      {/* From line 56 to 95, if there is email user is true (signed in), navbar has Account and Sign out buttons  */}
      {user?.email ? (
        <div className="flex items-center justify-center">
          <button
            className="pr-4 text-xl font-bold text-white"
            onClick={handleClickSearchbar}
          >
            {/* From line 63 to 81, if showSearchBar is true, show input field with GoSearch icon, else show the icon only */}
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
                      onChange={(e) => setSearch(e.target.value)}
                      value={search}
                    />
                  </form>
                </div>
              </>
            ) : (
              <GoSearch />
            )}
          </button>
          <Link to="/account">
            <button className="pr-4 text-white">Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className="cursor-pointer rounded bg-red-600 px-6 py-2 text-white"
          >
            Log Out
          </button>
        </div>
      ) : (
        // From line 98 to 138, if no use email (not signed in), show sign inn and sign up buttons
        <div className="flex items-center justify-center">
          <button
            className="pr-4 text-xl font-bold text-white"
            onClick={handleClickSearchbar}
          >
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
                      onChange={(e) => {
                        setSearch(e.target.value);
                        console.log(search);
                      }}
                      value={search}
                    />
                  </form>
                </div>
              </>
            ) : (
              <GoSearch />
            )}
          </button>
          <Link to="/login">
            <button className="pr-4 text-white">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="cursor-pointer rounded bg-red-600 px-6 py-2 text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
