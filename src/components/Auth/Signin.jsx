import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import { NavLink } from "react-router-dom";
import './signin.css';
import firebase from "firebase";



const Signin = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/Homel");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const google = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // var token = result.credential.accessToken;
      // The signed-in user info.
      // var user = result.user;
      // ...
    }).catch(function (error) {
      console.log(error);
    });
  }


  const { currentUser } = useContext(AuthContext);


  if (currentUser) {
    return <Redirect to="/Homel" />;
  }

  return (
    <>
      <div className="login-bg">
        <div id="login-box">
          <form onSubmit={handleLogin}>
            <h1>Signin</h1>
            <div className="left">
              <input type="text" autoComplete="off" name="email" placeholder="E-mail" />
              <input type="password" name="password" placeholder="Password" />
              <input type="submit" name="signup_submit" value="Sign In" />
            </div>

            <div className="right">
              <button onClick={google} className="social-signin google">Log in with Google+</button>
              <button className="social-signin linkedin">Log in with Linkedin</button>
            </div>
            <div className="or">OR</div>
            <NavLink to="Signup"> <p className="login-new">Don't Have An Account?</p></NavLink>
          </form>
        </div>
      </div>
    </>
  );
};

export default withRouter(Signin);