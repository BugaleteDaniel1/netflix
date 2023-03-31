import NavCss from "../../styles/home-screen-styles/Navbar.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [show, setShow] = useState(false);

  const showHideNav = () => {
    window.scrollY > 100 ? setShow(true) : setShow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", showHideNav);
    return () => {
      window.removeEventListener("scroll", showHideNav);
    };
  }, []);

  return (
    <>
      <nav className={`${NavCss.navbar} ${show && NavCss.blackNav}`}>
        <Link to="/">
          <img
            className={NavCss.logo}
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="a picture with the company logo"
          />
        </Link>
        <Link to="/profile">
          <img
            className={NavCss.avatar}
            src="https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png"
            alt="a picture of an default logo replacement"
          />
        </Link>
      </nav>
    </>
  );
};
