import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__info">
        <p>
          How Airbnb works
          <br />
          <br />
          Airbnb Luxe
          <br />
          <br />
          Olympics
        </p>
        <p>
          Newsroom
          <br />
          <br />
          HotelTonight
          <br />
          <br />
          Careers
        </p>
        <p>
          Airbnb Plus
          <br />
          <br />
          Airbnb for Work
        </p>
      </div>
      
      <div className="footer__info2">
        <h4>© 2020 Airbnb Clone, Inc. All rights reserved·</h4>
        <h5>Privacy·Terms·Sitemap</h5>
      </div>
    </div>
  );
}

export default Footer;
