import React, { useEffect, useState } from "react";
import "../styled/Row.css";
import axios from "../features/axios";

const Rows = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const baseUrl='https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
      {movies.map(movie =>(
        <img className="row__poster" key={movie.id} src={`${baseUrl}${movie.poster_path}`} alt={movie.name}/>
      ))}
      </div>

    </div>
  );
};

export default Rows;