import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieInfo() {
  const [movie, setMovie] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);
  let { id } = useParams();

  const key = import.meta.env.VITE_REACT_APP_API_KEY;

  // useEffect will only run once because of the state dataFetched
  useEffect(() => {
    const fetchData = async function () {
      try {
        if (!dataFetched) {
          await axios
            .get(
              `https://api.themoviedb.org/3/movie/${id}?language=en-US${key}`,
            )
            .then((res) => setMovie(res.data));
          setDataFetched(true);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [id, dataFetched]);
  console.log(movie);

  const dateString = movie?.release_date;
  const year = dateString ? parseInt(dateString.split('-')[0]) : null;
  // console.log(year);

  return (
    <>
      <div className="h-[550px] w-full">
        <div className="h-full w-full">
          <div className="absolute h-[550px] w-full bg-slate-400 bg-opacity-80"></div>
          <img
            className="h-full w-full object-cover"
            src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
            alt={movie?.title}
          />
          <div className="absolute top-[0%] my-10 h-[490px] w-full p-4 md:p-8">
            <div className="flex">
              <div>
                <img
                  className="h-[440px] w-[400px] rounded-md p-4"
                  src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                  alt={movie?.title}
                />
              </div>

              <div className="flex flex-col text-white">
                <div className="mt-10 flex w-full pl-10">
                  <h1 className="font-bold md:text-3xl lg:text-5xl">
                    {movie?.title}{' '}
                    <span className="pl-1 font-thin md:text-3xl lg:text-5xl">
                      ({year})
                    </span>
                  </h1>
                </div>

                <p className="pl-10 pt-2">
                  <div className="flex">
                    <span>{movie?.release_date}</span>
                    <span className="flex">
                      {movie?.genres &&
                        movie?.genres.map((genre, id) => (
                          <div key={id}>
                            <p>{genre.name}</p>
                          </div>
                        ))}
                    </span>
                    <span>{movie?.runtime} minutes</span>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-ful h-96 bg-white">actor face here</div>
      </div>
    </>
  );
}

export default MovieInfo;
