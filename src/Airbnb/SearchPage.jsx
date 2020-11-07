import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="search__page">
      <p>56 stays - 03 oct to 10 oct - 2 guest</p>
      <h1>Stays Nearby</h1>
      <div className="search__pageButton">
        <Button className="button" variant="outlined">
          Cancellaion Flexibility
        </Button>
        <Button className="button" variant="outlined">
          Type of place
        </Button>
        <Button className="button" variant="outlined">
          Price
        </Button>
        <Button className="button" variant="outlined">
          Rooms and beds
        </Button>
        <Button className="button" variant="outlined">
          More filters
        </Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/be3ad46e-2a2a-446e-a5b2-edbb1f27dbcb.jpg?im_w=480"
        location="New Delhi, India"
        title="STUNNING1BR,TERRACE +JACUZZI, +VibesLift,LOCATION!"
        description="This is a GORGEOUS 1 BR with a fantastic terrace, Jacuzzi, plants, Kitchen & every possible amenity."
        star="4.91"
        price="₹5,414/night"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/b710ad58-71ae-4896-9009-e8379fe09f77.jpg?im_w=960"
        location="New Delhi, India"
        title="Pink City Penthouse with beautiful terrace & View"
        description="Gorgeous & Sunny newly renovated 2bedroom Penthouse located at the ♡of city in C scheme."
        star="4.62"
        price="₹3,491/night"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/7fa1c6d8-d746-4863-817e-7af6c2f104a0.jpg?im_w=480"
        location="New Delhi, India"
        title="Pink City Bright n Spacious newly renovated"
        description="Gorgeous & Sunny newly renovated 2bedroom Penthouse located at the ♡of city in C scheme."
        star="4.22"
        price="₹3,643/night"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/e7234281-7a76-40f1-bfbb-e143db362090.jpg?im_w=480"
        location="New Delhi, India"
        title="★Metro Art House★ ( Netflix + Fast Wi Fi )"
        description="Gorgeous & Sunny newly renovated 2bedroom Penthouse located at the ♡of city in C scheme."
        star="4.62"
        price="₹3,491/night"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/6b2ec5d9-3169-4fe9-946e-bcadd0f62ef1.jpg?im_w=960"
        location="New Delhi, India"
        title="Pink City Penthouse with beautiful terrace & View"
        description="Gorgeous & Sunny newly renovated 2bedroom Penthouse located at the ♡of city in C scheme."
        star="4.62"
        price="₹3,491/night"
      />
    </div>
  );
}

export default SearchPage;
