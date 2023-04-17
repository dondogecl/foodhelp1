import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Axios from "axios";

// set default path for backend
Axios.defaults.baseURL = "http://localhost:8081";

// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomeGuest from "./components/HomeGuest/HomeGuest";
import CreateRecipe from "./components/createRecipe/CreateRecipe";
import SearchRecipe from "./components/searchRecipe/SearchRecipe";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./components/home/Home";
import BrowseRecipes from "./components/browseRecipes/BrowseRecipes";
import ViewRecipe from "./components/viewRecipe/viewRecipe";

function Main() {
  // loggedin state
  const [loggedIn, setLoggedIn] = React.useState(Boolean(localStorage.getItem("token")));
  return (
    <BrowserRouter>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={ loggedIn ? <Home /> : <HomeGuest />} />
        <Route path="/create-recipe" element={<CreateRecipe />} />
        <Route path="/search-recipe" element={<SearchRecipe />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/browse" element={<BrowseRecipes />} />
        <Route path="/recipes/:id" component={ViewRecipe} />
      </Routes>
         
      
      <Footer />
      
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<Main />);

// enable hot reloading
if (module.hot) {
  module.hot.accept();
}
