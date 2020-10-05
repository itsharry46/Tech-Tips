import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";
import { NavLink } from 'react-router-dom';
import './signup.css';

const Signup = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/Signin");

      await app
      .auth().currentUser.sendEmailVerification();
    } catch (error) {
      alert(error);
    }
  }, [history]);

  

  return (
    <>
      <div className="login-bg">
        <div id="login-box">
          <h1>Signup</h1>
          <form onSubmit={handleSignUp}>
            <div className="left-signup">
              <input type="text" autoComplete="off" name="fname" placeholder="Full Name" />
              <input type="text" autoComplete="off" name="email" placeholder="E-mail" />
              <input type="password" name="password" placeholder="Password" />
              <input type="submit" name="signup_submit" value="Sign Up" />
            </div>

            <div className="right-signup">
              <button className="social-signin google">Log in with Google+</button>
              <button className="social-signin linkedin">Log in with Linkedin</button>
            </div>
            <div className="or">OR</div>
            <NavLink to="Signin"> <p className="login-new">Already Have An Account?</p></NavLink>
          </form>
        </div>
      </div>
    </>
  );
};

export default withRouter(Signup);