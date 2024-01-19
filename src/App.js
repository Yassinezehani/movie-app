import "./App.css";
import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import { myObject } from "./myData";
import NewMovieForm from "./components/NewMovieForm";

function App() {
  // State variables to manage user input and component visibility
  const [searchedTitle, setSearchedTitle] = useState("");
  const [searchedRating, setSearchedRating] = useState(0);
  const [show, setShow] = useState(false);

  // State variable to manage movie data
  const [myData, setMyData] = useState(myObject);

  // State variable to manage new movie data
  const [newData, setNewData] = useState({});

  // Handler for getting input values to filter movies based on title and rating
  const handlefilter = (title, rating) => {
    setSearchedTitle(title);
    setSearchedRating(rating);
  };

  // Function to toggle the visibility of the NewMovieForm component
  const toggleShow = () => setShow(!show);

  // Handler for adding new movie data to the existing list
  const additionHandler = (newData) => {
    setMyData([
      ...myData,
      {
        id: myData.length + 1,
        ...newData,
      },
    ]);
    setNewData({});
    toggleShow();
  };

  // Array containing movies filtered by title and rating
  const filteredData = myData.filter((movie) => {
    const titleMatch = searchedTitle
      ? movie.title.toLowerCase().includes(searchedTitle.toLocaleLowerCase())
      : true;
    const ratingMatch = searchedRating
      ? Math.floor(movie.rating) === searchedRating
      : true;
    return titleMatch && ratingMatch;
  });

  return (
    <div className="App">
      <Navbar toggleShow={toggleShow} />
      <SearchBar handleFilter={handlefilter} />
      <MovieList filteredMovies={filteredData} />
      {show && (
        <NewMovieForm
          toggleShow={toggleShow}
          additionHandler={additionHandler}
          newData={newData}
          setNewData={setNewData}
        />
      )}
    </div>
  );
}

export default App;
