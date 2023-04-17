import React, { useEffect } from "react";
import {Link} from "react-router-dom";

// Components import

// Components

// others
import cardImage1 from "/public/images/home-cards-asparagus.jpg";
import cardImage2 from "/public/images/home-cards-cooking.jpg";
import cardImage3 from "/public/images/home-cards-shopping.jpg";

function HomeGuest() {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 mx-auto text-center">
            <div className="welcome-section">
              <h1>Welcome to FoodHelper</h1>
              <p>
                Looking for recipe inspiration? Need help reducing food waste?
                You've come to the right place! Sign up now to get started.
              </p>
              <Link to="/register">
              <button className="btn btn-primary">Register</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-6 col-md-9 col-sm-10 mx-auto">
        <div className="cards-section">
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body text-center">
                  <img
                    src={cardImage1}
                    className="img-fluid mb-3 d-block card-img"
                  />
                  <h5 className="card-title">Personalized Recommendations</h5>
                  <p className="card-text">
                    Tell us what ingredients you have, your dietary preferences,
                    and how much time you have to cook, and we'll recommend the
                    perfect recipe for you.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body text-center">
                  <img
                    src={cardImage2}
                    className="img-fluid mb-3 d-block card-img"
                  />
                  <h5 className="card-title">Community Recipes</h5>
                  <p className="card-text">
                    Join our community of home cooks and food enthusiasts.
                    Publish your own recipes, get votes and feedback, and
                    discover new recipes from other users.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body text-center">
                <img
                    src={cardImage3}
                    className="img-fluid mb-3 d-block card-img"
                  />
                  <h5 className="card-title">Budget Planning</h5>
                  <p className="card-text">
                    Provide a weekly or monthly budget and we'll create a meal
                    plan with recipes that fit your budget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeGuest;
