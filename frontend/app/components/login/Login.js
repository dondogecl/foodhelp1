import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

// other imports (images)
import logo from "/public/images/logo.png";

function Login(props) {
  const [email, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // handler for the submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post("/api/login", { email, password });
      // handle response
      if (response.data) {
        console.log("success");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("username", response.data.username);
        props.setLoggedIn(true);
        navigate("/");
      }
    } catch (error) {
        console.log(error);
        alert("Invalid email or password");
    }
  };

  return (
    <>
      <div className="container my-5">
        <div className="text-center">
          <form className="form-signin" onSubmit={handleSubmit}>
            <img
              className="mb-4 img-fluid"
              src={logo}
              alt="Food"
            />
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="inputEmail" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control mb-3"
              placeholder="Email address"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <label htmlFor="inputPassword" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control mb-5"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
