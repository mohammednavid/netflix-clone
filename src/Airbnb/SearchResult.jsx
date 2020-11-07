import React from "react";
import "./SearchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

function SearchResult({ img, location, title, description, star, price }) {
  return (
    <div className="search__result">
      <img src={img} alt="" />
      <div className="search__resultInofo">
        <div className="search__resultInfoTop">
            <div className="search__resultHeart">
          <FavoriteBorderIcon className="heart"/></div>
          <p>{location}</p>
          <h3>{title}</h3>
          <p>___</p>
          <p>{description}</p>
        </div>
        <div className="search__resultFooter">
          <div className="ratings">
          <StarIcon className="star" /><p>{star}</p></div>
          <h2>{price}</h2>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
