import { Navbar } from "../components/home-screen-comps/Navbar";
import ProfileCss from "../styles/profile/Profile.module.css";
import { useAuth } from "../../firebase";
import { logout } from "../../firebase";
import { Link } from "react-router-dom";
import { Plans } from "../components/Plans";

export const Profile = () => {
  const user = useAuth();

  const signout = async () => {
    try {
      await logout();
    } catch (error) {
      alert("Error" + error.message);
    }
  };

  return (
    <div className={ProfileCss.profile}>
      <Navbar />
      <article className={ProfileCss.body}>
        <h2 className={ProfileCss.title}>Edit Profile</h2>
        <div className={ProfileCss.container}>
          <div>
            <img
              className={ProfileCss.profileImage}
              src="https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png"
              alt="profile picture"
            />
          </div>
          <section className={ProfileCss.profileSection}>
            <p className={ProfileCss.email}>{user?.email}</p>
            <h4 className={ProfileCss.renewal}>Plans</h4>
            <Plans />
            <Link to="/login" onClick={signout} className={ProfileCss.signOut}>
              sign out
            </Link>
          </section>
        </div>
      </article>
    </div>
  );
};
