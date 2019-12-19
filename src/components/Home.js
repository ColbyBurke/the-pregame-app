import React, { useEffect, useReducer } from "react";
import homePicture from "../images/home-picture.jpg";
import homePicture2 from "../images/home-picture2.jpg";
import homePicture3 from "../images/home-picture3.jpg";
import { Card, Button } from "@material-ui/core";
import GetEvents from "./GetEvents";
import axios from "axios";
import { take } from "ramda";
import { Link } from "react-router-dom";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

function Home() {
  const dataReducer = (state, action) => {
    if (action.type === "SET_ERROR") {
      return { ...state, list: [], error: true };
    }
    if (action.type === "SET_LIST") {
      return { ...state, list: action.list, error: null };
    }
    throw new Error();
  };
  const initialData = {
    list: [],
    error: null
  };
  const [data, dispatch] = useReducer(dataReducer, initialData);

  useEffect(() => {
    axios
      .get("http://localhost:2500/events")
      .then(response => {
        console.log(response);
        dispatch({ type: "SET_LIST", list: response.data });
      })
      .catch(() => {
        dispatch({ type: "SET_ERROR" });
      });
  }, []);
  return (
    <div
      className="home-container"
      style={{
        marginTop: "60px"
      }}
    >
      <div className="home-event-group-container">
        <div className="home-links2">
          <div className="event-links">
            <br></br>
          <br></br>
            <br></br>
          <Card>
              <Link style={{textDecoration:"none", color:"green"}} to="/events"><Button style={{width: "200px", height:"200px"}}>Event</Button></Link>
            </Card>
            <br></br>
            <Card>
              <Link style={{textDecoration:"none", color:"green"}} to="/events/create"><Button style={{width: "200px", height:"300px"}}>Create Event</Button></Link>
            </Card>
          </div>
        </div>
        <div className="image-home">
          <AwesomeSlider>
            <div data-src={homePicture} />
            <div data-src={homePicture2} />
            <div data-src={homePicture3} />
          </AwesomeSlider>
        </div>
        <div className="home-links">
          <div className="group-links">
            <br></br>
          <br></br>
            <br></br>
            <Card>
              <Link style={{textDecoration:"none", color:"green"}} to="/groups"><Button style={{width: "200px", height:"200px"}}>Group</Button></Link>
            </Card>
            <br></br>
            <Card>
              <Link style={{textDecoration:"none", color:"green"}} to="/groups/create"><Button style={{width: "200px", height:"300px"}}>Create Group</Button></Link>
            </Card>
          </div>
        </div>
      </div>

      <div className="subheading-container">
        <div className="description-container">
          <h1 style={{color: "green"}}>Be a jollo my friend. </h1>
        </div>
        {/* <div className="featuredEvents-container">
            <h1>Popular Events</h1>
            <ul>
                {take(15, data.list.filter(x => parseInt(x.RSVPYES.length) >= parseInt(x.RSVPNO.length)).map(event => {
                  return <li key={event._id}><Link to={`/event/${event._id}`}>{event.name}</Link></li>
                }))}
            </ul>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
