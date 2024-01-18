import { useLocation } from 'react-router-dom';

function MovieInfo() {
  const location = useLocation();
  const movieInfo = location.state?.movieInfo;

  if (!movieInfo) {
    // Handle the case where movieInfo is not available
    return <div>Loading...</div>;
  }

  console.log(movieInfo);

  return <div className="text-white">hello</div>;
}

export default MovieInfo;
