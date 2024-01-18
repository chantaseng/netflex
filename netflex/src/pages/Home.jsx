import { useEffect, useState } from 'react';
import Main from '../components/Main';
import Navbar1 from '../components/NavBar1';
import Row from '../components/Row';

import requests from '../Request';

function Home() {
  // console.log('hello1');

  // const [refresh, setRefresh] = useState(true);

  // useEffect(() => {
  //   if (results.length > 0) setRefresh(false);
  // }, [results.length]);

  return (
    <>
      <Main />
      <Row
        rowID="1"
        title="Trending Movies"
        fetchURL={requests.requestTrendingMovie}
      />
      {/* <Row rowID="2" title="Action Movies" fetchURL={requests.requestAction} />
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
        title="Documentaries"
        fetchURL={requests.requestDocumentary}
      />
      <Row
        rowID="7"
        title="Trending TV Shows"
        fetchSeriesURL={requests.requestTrendingSerie}
      />
      <Row
        rowID="8"
        title="Action & Adventure TV Shows"
        fetchSeriesURL={requests.requestActionSerie}
      /> */}
      <Row
        rowID="9"
        title="Anime TV Shows"
        fetchSeriesURL={requests.requestAnimeSerie}
      />
      {/* <Row
        rowID="10"
        title="Classic Soap Opera Shows"
        fetchSeriesURL={requests.requestSoapSerie}
      />
      <Row
        rowID="11"
        title="Bingeworthy TV Shows"
        fetchSeriesURL={requests.requestHistorySerie}
      /> */}
    </>
  );
}
export default Home;
