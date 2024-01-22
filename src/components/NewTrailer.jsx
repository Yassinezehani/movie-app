import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
function NewTrailer({ myData }) {
  let { id } = useParams();
  let movie = myData.find((elt) => elt.id == id);
  console.log(movie);
  return (
    <div>
      <h1> NewTrailer</h1>
      <ReactPlayer url={movie.trailer} />
      <p className="movies-desc"> {movie.description} </p>
    </div>
  );
}

export default NewTrailer;
