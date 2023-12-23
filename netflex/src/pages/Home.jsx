import Main from "../components/Main";
import Row from "../components/Row";

import requests from "../Request";

function Home() {
  return (
    <>
      <Main />
      <Row title="Upcoming" fetchURL={requests.requestUpcoming} />
      <Row title="Trending" fetchURL={requests.requestTrending} />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row title="Action" fetchURL={requests.requestAction} />
      <Row title="Horror" fetchURL={requests.requestHorror} />
      <Row title="Romance" fetchURL={requests.requestRomance} />
      <Row title="History" fetchURL={requests.requestHistory} />
    </>
  );
}

export default Home;
