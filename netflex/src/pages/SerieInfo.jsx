import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function SerieInfo() {
  const [serie, setSerie] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);
  let { id } = useParams();

  const key = import.meta.env.VITE_REACT_APP_API_KEY;

  // useEffect will only run once because of the state dataFetched
  useEffect(() => {
    const fetchData = async function () {
      try {
        if (!dataFetched) {
          await axios
            .get(`https://api.themoviedb.org/3/tv/${id}?language=en-US${key}`)
            .then((res) => setSerie(res.data));
          setDataFetched(true);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [id, dataFetched]);
  console.log(serie);

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const dateString = serie?.release_date;
  const year = dateString ? parseInt(dateString.split('-')[0]) : null;

  return (
    <>
      <div className="h-[550px] w-full">
        <div className="h-full w-full">
          <div className="absolute h-[550px] w-full bg-slate-400 bg-opacity-80"></div>
          <img
            className="h-full w-full object-cover"
            src={`https://image.tmdb.org/t/p/original${serie?.backdrop_path}`}
            alt={serie?.name}
          />
          <div className="absolute top-[0%] my-10 h-[490px] w-full p-4 md:p-8">
            <div className="flex h-full w-full">
              <div className="h-full w-[50%]">
                <img
                  className="h-[440px] w-[400px] rounded-md p-4"
                  src={`https://image.tmdb.org/t/p/original${serie?.poster_path}`}
                  alt={serie?.name}
                />
              </div>

              <div className="flex w-full flex-col pl-10 text-white">
                <div className="mt-10 flex w-full">
                  <h1 className="font-bold md:text-3xl lg:text-5xl">
                    {serie?.name}{' '}
                    <span className="pl-1 font-thin md:text-3xl lg:text-5xl">
                      ({year})
                    </span>
                  </h1>
                </div>

                <div className="pt-4">
                  <div className="flex">
                    <span className="pr-3">{serie?.release_date}</span>

                    <span>{serie?.runtime} minutes</span>
                  </div>
                </div>

                <div className="my-8 flex">
                  <p>
                    ⭐️ {serie?.vote_average && serie?.vote_average.toFixed(1)}
                  </p>
                  <span className="px-1">&#x2022;</span>
                  <span className="flex">
                    {serie?.genres &&
                      serie?.genres.map((genre, id) => (
                        <div key={id}>
                          {genre.name}
                          {id !== serie.genres.length - 1 && ', '}
                        </div>
                      ))}
                  </span>
                </div>

                <div>
                  <h2 className="pb-4 text-lg italic text-gray-200">
                    {serie?.tagline}
                  </h2>
                  <h1 className="pb-4 text-xl font-bold">Overview</h1>
                  <p className="font-thin">{serie?.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-ful h-96 bg-black"></div>
      </div>
    </>
  );
}

export default SerieInfo;
