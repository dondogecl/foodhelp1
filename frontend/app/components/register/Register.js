import React, { useState, useEffect } from "react";
import Axios from "axios";

import logoBig from '/public/images/logo2.png';

function Register() {
  // manage state
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null); // for error messages

  // handle changes
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(
      `username: ${username}, email: ${email}, password: ${password}`
    );
    // register the user
    try {
      const response = await Axios.post("/api/register", {
        username,
        email,
        password,
      });
      // console.log the response from the request
      console.log(response.data);
      console.log("User registered");
      // redirect to login page
      window.location = "/login";
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message); // log the error message
        alert(`Error: ${error.response.data.message}`);
      } else {
        console.log(error);
        alert(`Error: ${error}`);
      }
    }
  }

  return (
    <>
      <div className="container my-5">
        <div className="text-center">
          <form className="form-signin" onSubmit={handleSubmit}>
            <img
              className="mb-4 img-fluid"
              src={logoBig}
              alt="Food"
              
            />
            <h1 className="h3 mb-3 font-weight-normal">Create an account</h1>
            <label htmlFor="inputUsername" className="sr-only">
              Username
            </label>
            <input
              type="text"
              id="inputUsername"
              className="form-control mt-5"
              placeholder="unique username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
            <label htmlFor="inputEmail" className="sr-only mt-2 mb-2">
              Email address
            </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control mt-2 mb-2"
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
              className="form-control mt-2 mb-5"
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
