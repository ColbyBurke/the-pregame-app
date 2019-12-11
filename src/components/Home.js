import React from "react";
import homePicture from "../images/home-picture.jpg";
import Description from "./Description";
import FeaturedEvents from "./FeaturedEvents"

function Home() {
  return (
    <div className="home-container">
      <div className="image-home">
        <img src={homePicture} alt="welcome to or page" />
      </div>
      <div className="subheading-container">
      <Description />
      <FeaturedEvents />
      </div>
    </div>
  );
}

export default Home;
