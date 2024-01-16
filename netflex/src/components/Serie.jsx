import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

function Serie({ serie }) {
  const [favorite, setFavorite] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  // Referencing the db of 'users' and grabbing the specific user.email
  const serieID = doc(db, 'users', `${user?.email}`);

  // ReUsing saveMovie function, but just changed the serieID for serie
  const saveMovie = async function () {
    if (user?.email) {
      setFavorite(!favorite);
      setSaved(true);
      await updateDoc(serieID, {
        savedMovies: arrayUnion({
          id: serie.id,
          title: serie.name,
          img: serie.backdrop_path,
        }),
      });
    } else {
      alert('Please log in to save a movie');
    }
  };

  return (
    <div
      className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]"
      key={serie?.id}
    >
      <img
        className="block h-auto w-full"
        src={`https://image.tmdb.org/t/p/w500${serie?.backdrop_path}`}
        alt={serie?.name}
      />
      <div className="absolute left-0 top-0 h-full w-full text-white  opacity-0 hover:bg-black/80 hover:opacity-100">
        <p className="flex h-full items-center justify-center whitespace-normal text-center text-xs font-bold md:text-sm">
          {serie?.name}
        </p>
        <p onClick={saveMovie}>
          {favorite ? (
            <FaHeart className="absolute left-4 top-4 text-gray-400" />
          ) : (
            <FaRegHeart className="absolute left-4 top-4 text-gray-400" />
          )}
        </p>
      </div>
    </div>
  );
}

export default Serie;
