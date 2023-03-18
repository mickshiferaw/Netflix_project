import logo from './logo.svg';
import './App.css';
import Row from './components/row/Row'
import requests from './apiobject';
import Banner from './components/banner/Banner';
import Nav from './components/nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINAL" fetchURL={requests.originalMovies} isLarge />
      <Row title="Trending Now" fetchURL={requests.trendingMovies} />
      <Row title="Top Rated" fetchURL={requests.topRatedMovies} />
      <Row title="Action Movies" fetchURL={requests.actionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.comedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.horrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.romanceMovies} />
      <Row title="Documentaries" fetchURL={requests.documentaries} />

    </div>
  );
}

export default App;