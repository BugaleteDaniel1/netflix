import { useState } from "react";
import { SignupScreen } from "../components/sign-up-comps/SignupScreen";
import LoginCss from "../styles/login-screen/LoginScreen.module.css";

export const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  console.log(signIn);
  const handleSignIn = (e) => {
    e.preventDefault();
    setSignIn(true);
  };
  const setFalse = () => {
    setSignIn(false);
  };

  return (
    <article className={LoginCss.wrapper}>
      <div>
        <nav className={LoginCss.nav}>
          <img
            style={{ cursor: "pointer" }}
            onClick={setFalse}
            className={LoginCss.logo}
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="the netflix logo"
          />
          <button
            style={!signIn ? { display: "block" } : { display: "none" }}
            onClick={(e) => handleSignIn(e)}
            className={LoginCss.btn}
          >
            Sign In
          </button>
        </nav>

        <div className={LoginCss.gradient}>
          {signIn ? (
            <SignupScreen />
          ) : (
            <div className={LoginCss.heading}>
              <h2>Unlimited movies, TV shows, and more.</h2>
              <p>Watch anywhere. Cancel anytime.</p>
              <h3 className={LoginCss.newsletterLabel}>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <form onSubmit={(e) => handleSignIn(e)}>
                <div className={LoginCss.newsletterWrapper}>
                  <input
                    className={LoginCss.emailInput}
                    type="text"
                    placeholder="Email adress"
                  />
                  <input
                    className={LoginCss.submitBtn}
                    type="submit"
                    value="Get Started >"
                  />
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
