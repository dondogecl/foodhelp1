import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

// other imports
import heroImage from "/public/images/hero.jpg";
import logo from "/public/images/logo-30px.png";

function HeaderLoggedIn(props) {
    //const navigate = Navigate();
    
    
    function handleLogout() {
    props.setLoggedIn(false);
    // remove local storage items
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    // redirect to home page
    //navigate("/");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Food+ Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto text-center">
              <li className="nav-item px-2">
                <Link className="nav-link" to="/browse">
                  Browse Recipes
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link" to="/search-recipe">
                  Cooking Assistant
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link" to="/create-recipe">
                  Create Recipe
                </Link>
              </li>
              <li className="nav-item px-2">
                <button
                  onClick={handleLogout}
                  className="btn btn-sm btn-secondary"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <img
              src={heroImage}
              className="img-fluid"
              id="hero-image"
              alt="Food+ Hero Image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderLoggedIn;
