import HomeScreenCss from "../../styles/home-screen-styles/HomeScreen.module.css";
import { Banner } from "./Banner";
import { Navbar } from "./Navbar";
export const HomeScreen = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      {/* rows */}
    </div>
  );
};
