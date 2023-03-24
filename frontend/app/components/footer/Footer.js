import React, { useEffect } from "react";

function Footer() {
  return (
    <>
      <footer className="bg-white text-dark py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 text-center">
              <p>&copy; {new Date().getFullYear()} FoodHelper Team</p>
            </div>
            <div className="col-md-12 text-center">
              <a className="text-dark text-decoration-none mx-3" href="#">
                Home
              </a>
              <a className="text-dark text-decoration-none mx-3" href="#">
                About
              </a>
              <a className="text-dark text-decoration-none mx-3" href="#">
                Help
              </a>
              <a className="text-dark text-decoration-none mx-3" href="#">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
