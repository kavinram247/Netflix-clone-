import react from "react";
import "./App.css";
import Row from "./Rows";
import requests from "./requests";
import banner from "./Banner";
function App() {
  return (
    <div className="App">
      {/*nav*/}
      <banner> </banner>
      <Row
        title="NETFLIX ORIGINALS"
        fetchurl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="TRENDING NOW" fetchurl={requests.fetchTrending} />
      <Row title="TOP RATED" fetchurl={requests.fetchTopRated} />
      <Row title="ACTION" fetchurl={requests.fetchActionMovies} />
      <Row title="COMEDY" fetchurl={requests.fetchComedyMovies} />
      <Row title="HORROR" fetchurl={requests.fetchHorrorMovies} />
      <Row title="ROMANCE" fetchurl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchurl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
