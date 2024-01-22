import React from "react";
//import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar({ toggleShow }) {
  return (
    <div className="Navbar">
      <img
        src="https://www.freeiconspng.com/thumbs/movie-icon/movie-icon-27.png"
        alt="Website Logo"
        height={"100%"}
      />
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </div>
      <button onClick={toggleShow}>+Add Movie</button>
    </div>
  );
}

export default Navbar;
