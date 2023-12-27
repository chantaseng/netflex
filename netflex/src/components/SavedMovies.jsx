import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

function SavedMovies() {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  function slideLeft() {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  function slideRight() {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  useEffect(
    function () {
      onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
        setMovies(doc.data()?.savedMovies);
      });
    },
    [user?.email],
  );

  const movieRef = doc(db, 'users', `${user?.email}`);
  const deleteMovie = async function (passedID) {
    try {
      const result = movies.filter((movie) => movie?.id !== passedID);
      await updateDoc(movieRef, {
        savedMovies: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className="p-4 font-bold text-white md:text-xl">My Movies</h2>
      <div className="group relative flex items-center">
        <MdChevronLeft
          onClick={slideLeft}
          className="absolute left-5 z-10 hidden cursor-pointer rounded-full bg-white opacity-50 hover:opacity-100 group-hover:block"
          size={40}
        />
        <div
          id={'slider'}
          className="relative mx-2 h-full w-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide"
        >
          {movies.map((movie, id) => (
            <div
              className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]"
              key={id}
            >
              <img
                className="block h-auto w-full"
                src={`https://image.tmdb.org/t/p/w500${movie?.img}`}
                alt={movie?.title}
              />
              <div className="absolute left-0 top-0 h-full w-full text-white  opacity-0 hover:bg-black/80 hover:opacity-100">
                <p className="flex h-full items-center justify-center whitespace-normal text-center text-xs font-bold md:text-sm">
                  {movie?.title}
                </p>
                <p
                  onClick={() => deleteMovie(movie.id)}
                  className="absolute right-4 top-4 text-gray-300"
                >
                  <AiOutlineClose />
                </p>
              </div>
            </div>
          ))}
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

export default SavedMovies;
