import React from "react";
import { Link } from "react-router-dom";


// other imports
import heroImage from '/public/images/hero.jpg';

function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="public/images/logo.png" alt="Food+ Logo" />
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
                <Link className="nav-link" to="#">
                  Browse Recipes
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link" to="#">
                  Cooking Assistant
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link" to="/create-recipe">
                  Create Recipe
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link className="btn btn-primary" to="/login">
                  Log In
                </Link>
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

export default Header;
