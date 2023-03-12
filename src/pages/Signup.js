import React from "react";
import Button from "../elements/Button";
import CardWelcome from "../parts/CardWelcome";
import Header from "../parts/Header";
export default function Signup() {
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
                Create your account and get started!
              </p>
              <form className="input-group">
                <div className="form-group">
                  <label for="exampleInputUsername">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="example"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="example@example.com"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="example"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword" hidden></label>
                  <button className="btn-signup">
                    <a href="#" className="signup-link">
                      Create account
                    </a>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
