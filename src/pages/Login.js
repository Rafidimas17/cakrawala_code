import React, { useState } from "react";
import Button from "../elements/Button";
import Header from "../parts/Header";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };
  const handleLogin = () => {
    console.log("anda login dengan akun ini :", email, password);
  };
  return (
    <>
      <Header isCentered />
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div
            className="col-5 mt-3"
            style={{
              height: "100%",
              borderRadius: 20,
              backgroundColor: "white",
            }}
          >
            {/* <div className="alert alert-success mt-2" role="alert">
              Login berhasil
            </div> */}
            <h2
              className="sayHi mt-3  text-gray-700"
              style={{ fontFamily: "Poppins", fontWeight: 600 }}
            >
              Login
            </h2>
            <p></p>
            <p
              className="text-gray-600"
              style={{ fontFamily: "Poppins", fontSize: 15 }}
            >
              Enter the information you entered while registering{" "}
            </p>
            <form class="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInputValue"
                placeholder="example@example.com"
                value={email}
                onChange={handleEmail}
                style={{ fontFamily: "Poppins", fontSize: 16 }}
              />
              <label
                htmlFor="floatingInputValue"
                style={{ fontFamily: "Poppins", fontSize: 16 }}
              >
                Email
              </label>
            </form>
            <form class="form-floating">
              <input
                type="password"
                className="form-control mt-3"
                id="floatingInputValue"
                placeholder="password"
                onChange={handlePassword}
                value={password}
                style={{ fontFamily: "Poppins", fontSize: 16 }}
              />
              <label
                htmlFor="floatingInputValue"
                style={{ fontFamily: "Poppins", fontSize: 16 }}
              >
                Password
              </label>
            </form>
            <input
              type="checkbox"
              className="mt-1"
              value=""
              id="flexCheckDefault"
              style={{ cursor: "pointer" }}
            />{" "}
            <label
              className="form-check-label mt-1"
              style={{ fontFamily: "Poppins", fontSize: 15 }}
            >
              {" "}
              Show password
            </label>
            <a
              href="/forgotpassword"
              className="forgotpassword text-primary mt-1"
              style={{
                float: "right",
                fontFamily: "Poppins",
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              forgot password?
            </a>
            <Button
              className="btn mt-3"
              hasShadow
              isPrimary
              isBlock
              onClick={() => handleLogin()}
            >
              <h5>Login</h5>
            </Button>
            <p
              className="mt-2 text-gray-800"
              style={{ fontFamily: "Poppins", fontSize: 15 }}
            >
              Don't have account?
              <a
                href="/signup"
                style={{
                  fontFamily: "Poppins",
                  fontSize: 15,
                  textDecoration: "none",
                }}
              >
                {" "}
                regist now
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
