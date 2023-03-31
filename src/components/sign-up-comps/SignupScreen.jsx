import SignupCss from "../../styles/login-screen/SignupScreen.module.css";
import { useRef } from "react";
import { signin } from "../../../firebase";
import { signup } from "../../../firebase";

export const SignupScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = async (e) => {
    e.preventDefault();
    try {
      await signin(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      alert("Error" + error.message);
    }
  };

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      alert("Error" + error.message);
    }
  };

  return (
    <div className={SignupCss.wrapper}>
      <div className={SignupCss.formWrapper}>
        <form onSubmit={signIn} className={SignupCss.form}>
          <h3 className={SignupCss.title}>Sign In</h3>
          <input
            ref={emailRef}
            className={SignupCss.inp}
            placeholder="Email"
            type="email"
          />
          <input
            ref={passwordRef}
            className={SignupCss.inp}
            placeholder="Password"
            type="password"
          />
          <input className={SignupCss.submit} type="submit" value="Sign In" />
        </form>
        <p className={SignupCss.para}>
          New To Netflix?{" "}
          <a onClick={register} className={SignupCss.link}>
            Sign up Now
          </a>
        </p>
        <p className={SignupCss.demo}>demo email: test@example.com</p>
        <p className={SignupCss.demo}>demo password: password</p>
      </div>
    </div>
  );
};
