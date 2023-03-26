import { useEffect, useState } from "react";
import BannerCss from "../../styles/home-screen-styles/Banner.module.css";
import { requests } from "../../api/Requests";
import instance from "../../api/apiCall";

export const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await instance.get(requests.fetchNetflixOriginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    };
    fetchData();
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <header
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className={BannerCss.banner}
    >
      <div className={BannerCss.contents}>
        <h1 className={BannerCss.title}>{movie.original_name}</h1>
        <div className={BannerCss.buttons}>
          <button className={BannerCss.btn}>play</button>
          <button className={BannerCss.btn}>my list</button>
        </div>
        <p className={BannerCss.desc}>{truncate(movie.overview, 150)}</p>
      </div>
      <div className={BannerCss.fade} />
    </header>
  );
};
