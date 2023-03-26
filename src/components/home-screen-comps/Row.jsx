import RowCss from "../../styles/home-screen-styles/Row.module.css";
import { useState, useEffect } from "react";
import instance from "../../api/apiCall";

export const Row = ({ title, fetchUrl, isLarge = false }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, []);

  return (
    <div className={RowCss.row}>
      <h2>{title}</h2>
      <div className={RowCss.posters}>
        {movies?.map(
          (movie) =>
            ((isLarge && movie.poster_path) ||
              (!isLarge && movie.backdrop_path)) && (
              <img
                key={movie.id}
                className={`${RowCss.img} ${isLarge && RowCss.imgLarge}`}
                src={`https://image.tmdb.org/t/p/original/${
                  isLarge ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
};
