import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomeGuest from "./components/HomeGuest/HomeGuest";
import CreateRecipe from "./components/createRecipe/CreateRecipe";

function Main() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeGuest />} />
        <Route path="/create-recipe" element={<CreateRecipe />} />
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
