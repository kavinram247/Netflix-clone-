import react, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchurl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  //a snippet of code which works on a specific condition/variable
  useEffect(() => {
    //if[] run once when the row loads, and dont run again
    async function fetchdata() {
      const request = await axios.get(fetchurl);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchdata();
  }, [fetchurl]);
  console.table(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {/*several posters*/}

        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          ></img>
        ))}
      </div>
    </div>
  );
}

export default Row;
