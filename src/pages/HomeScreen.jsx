import { Banner } from "../components/home-screen-comps/Banner";
import { Navbar } from "../components/home-screen-comps/Navbar";
import { Row } from "../components/home-screen-comps/Row";
import { requests } from "../api/Requests";
import { logout } from "../../firebase";
export const HomeScreen = () => {
  const handleLogOut = async () => {
    try {
      await logout();
    } catch {
      alert("error");
    }
  };
  return (
    <div>
      <button onClick={handleLogOut} className="logout">
        logoutings
      </button>
      <Navbar />
      <Banner />
      <Row
        isLarge
        title={"Netflix Originals"}
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
      <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
      <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies} />
      <Row title={"Documanentaries"} fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};
