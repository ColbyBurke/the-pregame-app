import React from "react";
import homePicture from "../images/home-picture.jpg";
import Description from "./Description";
import FeaturedEvents from "./FeaturedEvents"
import { Card } from '@material-ui/core'

function Home() {
  return (
    <div className="home-container" style={{
      margin: ' 0 auto',
      width: '1000px'
    }}>
      <Card elevation='1' style={{
        margin: '0 auto'
      }}>
        <div className="image-home">
          <img src={homePicture} alt="welcome to or page" />
        </div>
      </Card>
      <div className="subheading-container">
        <Description />
        <FeaturedEvents />
      </div>
    </div >
  );
}

export default Home;
