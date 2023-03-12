import React from "react";
// import Button from "../elements/Button";
import CardWelcome from "../parts/CardWelcome";
// import Header from "../parts/Header";
export default function Login() {
  return (
    <>
      <div className="container">
        {/* <Header isCentered /> */}
        <div className="row">
          <div className="col-tag col-6">
            <CardWelcome />
          </div>
          <div className="col-6 p-5">
            <div className="container">
              <h5 className="title-signup">Sign up</h5>
              <p className="tagline-welcome mt-2">
                Don't have any account?{" "}
                <span className="regist"> Register</span>
              </p>
              <form className="input-group">
                <div className="form-group">
                  <h4 for="exampleInputEmail">Email</h4>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="example@example.com"
                  />
                </div>
                <div className="form-group">
                  <h4 for="exampleInputPassword">
                    Password
                    <span
                      for="exampleForgotPassword"
                      className="forgot-password float-right"
                    >
                      Forgot Password?
                    </span>
                  </h4>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="example"
                  />
                </div>

                <div className="form-group">
                  <h4 for="exampleInputPassword" hidden></h4>
                  <button className="btn-login">
                    <a href="#" className="login-link">
                      Login
                    </a>
                  </button>
                </div>
                <div className="form-group mb-0 justify-content-center text-center">
                  <h4 className="text-center" for="exampleInputPassword">
                    OR
                  </h4>
                </div>
                <div className="form-group">
                  <h4 for="exampleInputPassword" hidden></h4>
                  <a href="#" className="login-link">
                    <button className="btn-login-google">
                      with <span>Google</span>
                    </button>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
