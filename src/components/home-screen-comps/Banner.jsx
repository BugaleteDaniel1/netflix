import BannerCss from "../../styles/home-screen-styles/Banner.module.css";

export const Banner = () => {
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  const desc = `
  this is desc
  this is desc
  this is desc
  this is desc
  this is desc
  this is desc
  this is desc
  this is desc
  this is desc
  this is desc
  this is desc
  this is desc
  `;

  return (
    <header
      style={{
        backgroundImage: `url("https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className={BannerCss.banner}
    >
      <div className={BannerCss.contents}>
        <h1 className={BannerCss.title}>Movie Name</h1>
        <div className={BannerCss.buttons}>
          <button className={BannerCss.btn}>play</button>
          <button className={BannerCss.btn}>my list</button>
        </div>
        <p className={BannerCss.desc}>{truncate(desc, 150)}</p>
      </div>
      <div className={BannerCss.fade} />
    </header>
  );
};
