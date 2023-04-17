import React, { useState, useEffect } from "react";
import Axios from "axios";

function Register() {
  // manage state
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handle changes
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(
      `username: ${username}, email: ${email}, password: ${password}`
    );
    // register the user
    try {
        Axios.post("/register", { username, email, password });
        console.log("User registered");
    } catch (error) {
        console.log(error);
    }
    
  }

  return (
    <>
      <div className="container my-5">
        <div className="text-center">
          <form className="form-signin" onSubmit={handleSubmit}>
            <img
              className="mb-4"
              src="public/images/logo.png"
              alt="Food"
              width="72"
              height="72"
            />
            <h1 className="h3 mb-3 font-weight-normal">Create an account</h1>
            <label htmlFor="inputUsername" className="sr-only">
              Username
            </label>
            <input
              type="text"
              id="inputUsername"
              className="form-control"
              placeholder="unique username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
            <label htmlFor="inputEmail" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
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
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <button className="btn btn-lg btn-success btn-block" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
