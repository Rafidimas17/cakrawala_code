import React from "react";
import Button from "../elements/Button";
// import Button from "../elements/Button";
import CardWelcome from "../parts/CardWelcome";
// import Header from "../parts/Header";
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
                  <h4 for="exampleInputUsername">Username</h4>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="example"
                  />
                </div>
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
                  <h4 for="exampleInputPassword">Password</h4>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="example"
                  />
                </div>
                <div className="form-group">
                  <h4 for="exampleInputPassword" hidden></h4>
                  <Button
                    // id="btn-signup"
                    className="btn btn-shadow mt-4"
                    href="/login"
                    type="link"
                    style={{
                      borderRadius: 8,
                      backgroundColor: "#3252DF",
                      color: "white",
                      width: "168px",
                      height:"52px",
                      padding: "auto",
                      boxShadow:" 0px 4px 4px rgba(0, 0, 0, 0.25)",
                      fontSize:"15px",
                      fontFamily:"Poppins"
                    }}
                  >
                    Create account
                  </Button>
                  {/* <button className="btn-signup">
                    <a href="/login" className="signup-link"></a>
                  </button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
