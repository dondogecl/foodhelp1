import React from "react";
import { Link } from "react-router-dom";

import HeaderLoggedIn from "../headerLoggedIn/HeaderLoggedIn";
import HeaderLoggedOut from "../headerLoggedOut/HeaderLoggedOut";


// other imports
import heroImage from '/public/images/hero.jpg';
import logo from '/public/images/logo-30px.png';

function Header(props) {
  return (
    <>
    <div>
    {props.loggedIn ? <HeaderLoggedIn setLoggedIn={props.setLoggedIn} /> : <HeaderLoggedOut setLoggedIn={props.setLoggedIn} />}
    </div>
    </>
  );
}

export default Header;
