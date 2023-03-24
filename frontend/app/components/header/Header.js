import React from "react";
import { Link } from "react-router-dom";


// other imports
import heroImage from '/public/images/hero.jpg';

function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="images/logo.png" alt="Food+ Logo" />
          </a>
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
                <a className="nav-link" href="#">
                  Browse Recipes
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" href="#">
                  Cooking Assistant
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" href="#">
                  Create Recipe
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="btn btn-primary" href="#">
                  Log In
                </a>
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
