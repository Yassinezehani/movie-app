import React from "react";
import { Link } from "react-router-dom";
//import "./MovieCard.css";

function MovieCard({ imgURL, title, rating, description, id }) {
  return (
    <div className="MovieCard">
      <div className="card">
        <div className="imgWrapper">
          <img src={imgURL} alt="Movie Poster" width={"100%"} />
          <div className="releaseDate">
            <p>{description}</p>
          </div>
        </div>
        <div className="cardBody">
          <abbr title={title}>
            <h2>{title}</h2>
          </abbr>
          <p>
            <img
              src="https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png"
              alt="imdb icon"
              width={20}
            />
            Rating: {rating}/10
          </p>
          <Link to={`/movie/${id}`}>Details</Link>
        </div>
      </div>
    </div>
  );
}
MovieCard.defaultProps = {
  imgURL:
    "https://americandurafilm.com/wp-content/uploads/2022/06/No-Image-Placeholder.png",
  title: "Unavailable title",
  genres: "Unavailable",
  release: "Unavailable",
  description: "Unavailable description",
};
export default MovieCard;
