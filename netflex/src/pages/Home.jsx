import Main from "../components/Main";
import Row from "../components/Row";

import requests from "../Request";

function Home() {
  return (
    <>
      <Main />
      <Row rowID="1" title="Upcoming" fetchURL={requests.requestUpcoming} />
      <Row rowID="2" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="3" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowID="5" title="Action" fetchURL={requests.requestAction} />
      <Row rowID="6" title="Horror" fetchURL={requests.requestHorror} />
      <Row rowID="7" title="Romance" fetchURL={requests.requestRomance} />
      <Row rowID="8" title="History" fetchURL={requests.requestHistory} />
    </>
  );
}

export default Home;
