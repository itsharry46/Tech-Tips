import React from 'react';
import "./login.css";
import log from "./login.jpg";

const Login = () => {
  return (
    <>
      <div className="container-fluid login-bg">
        <div className="row">
          <div className="col login-left">
            <img src={log} alt="login-left-img" />
          </div>


          <div className="col login-right">
            <h1>Login To Continue</h1>
            <form className="login-form">
              <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" required="true" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" required="true" class="form-control" id="exampleInputPassword1" />
              </div>
              <button type="submit" class="login-button">Login</button>
            </form>
          </div>

        </div>
      </div>
    </>
  );
};

export default Login;