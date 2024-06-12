import { useEffect, useState } from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import Top10Row from '../components/Top10Row';

import requests from '../Request';

function Home() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [location, setLocation] = useState('');

  const key = import.meta.env.VITE_REACT_APP_GEO_API_KEY;

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            // Use a reverse geocoding service to get the location name
            try {
              const response = await fetch(
                `https://api-bdc.net/data/reverse-geocode?latitude=${latitude}&longitude=${longitude}&localityLanguage=en&key=${key}`,
              );
              const data = await response.json();
              console.log(data);
              setLocation(
                data.city ||
                  data.locality ||
                  data.principalSubdivision ||
                  'your area',
              );
            } catch (error) {
              console.error('Error fetching location data:', error);
            }
          },
          (error) => {
            console.error('Error getting location:', error);
          },
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    fetchLocation();
  }, []);

  return (
    <>
      <Main />
      <Row
        rowID="1"
        title="Trending Movies"
        fetchURL={requests.requestTrendingMovie}
      />
      <Row
        rowID="2"
        title="Action & Adventure Movies"
        fetchURL={requests.requestAction}
      />
      {screenWidth >= 1024 && (
        <Top10Row
          rowID="11"
          title={`Top 20 Movies in ${location} Today`}
          fetchURL={requests.requestTop10Movie}
        />
      )}
      <Row
        rowID="3"
        title="Critically Acclaimed Movies"
        fetchURL={requests.requestCriticallyAcclaimed}
      />
      <Row
        rowID="4"
        title="Witty Comedy Movies"
        fetchURL={requests.requestComedy}
      />
      <Row
        rowID="5"
        title="Horror Thrillers"
        fetchURL={requests.requestHorror}
      />
      <Row
        rowID="6"
        title="New TV Shows on Netflex"
        fetchSeriesURL={requests.requestTrendingSerie}
      />
      <Row
        rowID="7"
        title="Bingeworthy TV Shows"
        fetchSeriesURL={requests.requestActionSerie}
      />
      {/* {screenWidth >= 1024 && (
        <Top10Row
          rowID="12"
          title={`Top 20 TV Shows in ${location} Today`}
          fetchURL={requests.requestTop10Serie}
        />
      )} */}
      <Row
        rowID="8"
        title="Anime"
        fetchSeriesURL={requests.requestAnimeSerie}
      />
      <Row
        rowID="9"
        title="True Crime Shows"
        fetchSeriesURL={requests.requestCrimeSerie}
      />
      <Row
        rowID="10"
        title="Award-Winning TV Dramas"
        fetchSeriesURL={requests.requestHistorySerie}
      />
    </>
  );
}
export default Home;
