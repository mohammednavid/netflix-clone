import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

function Banner() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
        {showSearch && <Search />}
      </div>

      <div className="banner__info">
        <div className="banner__center">
          <input type="text" placeholder="Start your search" />
          <SearchIcon className="SearchIcon" />
        </div>
        <h1>Go Near</h1>
        <h4>
          Settle in somewhere new. Discover nearby
          <br />
          stays to live, work, or just relax.
        </h4>
        <Link to="/search" className="banner__button">
          <Button variant="outlined">Explore nearby</Button>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
