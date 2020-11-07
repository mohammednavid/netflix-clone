import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt="Airbnb Logo"
          className="header__icon"
        />
      </Link>
      <div className="header__center">
        <input type="text" placeholder="Start your search" />
        <SearchIcon className="SearchIcon" />
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon className="earth"/>
        <ExpandMoreIcon className="down"/>
        <div className="burger__avatar">
        <MenuIcon className="burger"/>
        <Avatar />
        </div>
      </div>
    </div>
  );
}

export default Header;
