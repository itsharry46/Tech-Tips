import React from 'react';
import "./login.css";
import leftimg from "../../images/landing-page.svg";

const Login = () => {
  return (
    <>
      <div className="bg-color">
        <div className="container">
          <div className="card-login">
            <div className="row">
              <div className="col left-side-login">
                <img src={leftimg} alt="left-image" />
              </div>
              <div className="col right-side-login">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;