import React from "react";
//import "./Navbar.css";

function Navbar({ toggleShow }) {
  return (
    <div className="Navbar">
      <img
        src="https://www.freeiconspng.com/thumbs/movie-icon/movie-icon-27.png"
        alt="Website Logo"
        height={"100%"}
      />

      <button onClick={toggleShow}>+Add Movie</button>
    </div>
  );
}

export default Navbar;
