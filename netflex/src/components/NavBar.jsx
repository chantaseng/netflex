import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import Search from './Search';
import { GoSearch } from 'react-icons/go';
import { useState } from 'react';

function Navbar() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  // console.log(user.email);

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
    setShowSearch((searchbar) => !searchbar);
  };

  return (
    <div className="absolute z-[100] flex w-full items-center justify-between p-4">
      <Link to="/">
        <h1 className="cursor-pointer text-4xl font-bold text-red-600">
          NETFLEX
        </h1>
      </Link>
      {user?.email ? (
        <div className="flex items-center justify-center">
          <button
            className="pr-4 text-xl font-bold text-white"
            onClick={handleClickSearchbar}
          >
            {showSearch ? (
              <>
                <div className="relative flex items-center justify-center">
                  <div className="absolute left-1 z-10">
                    <GoSearch />
                  </div>
                  <input
                    type="text"
                    placeholder="Movie, series, genres"
                    className="rounded bg-black pl-7 placeholder-gray-600 placeholder:text-sm"
                  />
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
        <div className="flex items-center justify-center">
          <button
            className="pr-4 text-xl font-bold text-white"
            onClick={handleClickSearchbar}
          >
            {showSearch ? (
              <>
                <div className="relative flex items-center justify-center">
                  <div className="absolute left-1 z-10">
                    <GoSearch />
                  </div>
                  <input
                    type="text"
                    placeholder="Movie, series, genres"
                    className="rounded bg-black pl-7 placeholder-gray-600 placeholder:text-sm"
                  />
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
