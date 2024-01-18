import { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import axios from 'axios';
import MovieInfo from './MovieInfo';
import { NavLink, useNavigate } from 'react-router-dom';

function Movie({ movie }) {
  const [favorite, setFavorite] = useState(false);
  const [saved, setSaved] = useState(false);
  const [movieInfo, setMovieInfo] = useState([]);
  const navigate = useNavigate();
  const { user } = UserAuth();

  // Referencing the db of 'users' and grabbing the specific user.email
  const movieID = doc(db, 'users', `${user?.email}`);

  // watchlist is an empty object that i created in AuthContext for firestore db. It does NOT have any link with the Watchlist.jsx component. Same name is just a coincidence
  const saveToWatchList = async function () {
    if (user?.email) {
      setFavorite(!favorite);
      setSaved(true);
      await updateDoc(movieID, {
        watchlist: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
        }),
      });
    } else {
      alert('Please log in to save a movie');
    }
  };

  const key = import.meta.env.VITE_REACT_APP_API_KEY;

  const id = movie.id;

  // const fetchData = async function () {
  //   try {
  //     await axios
  //       .get(`https://api.themoviedb.org/3/movie/${id}?language=en-US${key}`)
  //       .then((res) => setMovieInfo(res.data));
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  // console.log(movieInfo);

  const handleMovieInfo = function () {
    // fetchData();
    navigate(`/movie/${id}`, { state: { movieInfo } });

    // return <MovieInfo movieInfo={movieInfo} />;
  };

  return (
    <>
      <NavLink to={`/movie/${id}`}>
        {movie.backdrop_path === null ? null : (
          <div
            className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]"
            key={movie?.id}
            onClick={handleMovieInfo}
          >
            <img
              className="block h-auto w-full"
              src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
              alt={movie?.title}
            />
            <div className="absolute left-0 top-0 h-full w-full text-white  opacity-0 hover:bg-black/80 hover:opacity-100">
              <p className="flex h-full items-center justify-center whitespace-normal text-center text-xs font-bold md:text-sm">
                {movie?.title}
              </p>
              <p onClick={saveToWatchList}>
                {favorite ? (
                  <FaHeart className="absolute right-4 top-4 text-gray-400" />
                ) : (
                  <FaRegHeart className="absolute right-4 top-4 text-gray-400" />
                )}
              </p>
            </div>
          </div>
        )}
      </NavLink>
    </>
  );
}

export default Movie;
