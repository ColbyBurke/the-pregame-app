import React, {useEffect, useReducer} from "react";
import homePicture from "../images/home-picture.jpg"
import { Card } from '@material-ui/core'
import GetEvents from './GetEvents' 
import axios from 'axios'
import {take} from 'ramda'
import {Link} from 'react-router-dom'


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
      <div className="description-container">
            <h1>The pregame app</h1>
            <p>Lorem ipsum dolor sit amet, vulputate aliquam ut dolor. Ut quisque molestiae leo, sem eget quis, varius magna urna et nostra, cursus donec volutpat tristique pede vestibulum. Pede vitae duis sodales leo, massa quis proin faucibus magna nam. Erat laoreet, congue nec eget odio. Sem luctus montes nibh eget est eget, dapibus cras risus aliquam turpis ac id. Neque justo justo, laoreet luctus tellus vehicula aliquam a, ligula maecenas vestibulum suspendisse esse urna vel, magna pretium magna litora nibh. Tellus ac adipiscing placerat natoque quam sollicitudin, suscipit porta sit. Magna fusce commodo, suspendisse facilisis, aenean eget bibendum nam dolor aliquam. Et mauris lorem ultricies a, sit dapibus turpis consectetuer et sed. Nulla lacus aliquet eros tempor, eu eros morbi risus. Eros neque tincidunt adipiscing neque, etiam euismod in nascetur condimentum elementum morbi, placerat consequat laoreet ultricies, nec non donec in turpis in diam, suscipit condimentum ligula etiam et. Porta alias nam cras quam, luctus elit morbi augue ipsum suspendisse. Id ullamcorper placerat dui id commodo gravida, amet cum velit, viverra vel auctor volutpat imperdiet egestas, nunc vel auctor mus eros vel. Libero in, et tellus semper taciti, sed donec lectus sodales amet. Dapibus pulvinar et vestibulum ipsum quam, et dui amet bibendum at cum habitant, viverra pellentesque quam risus in vestibulum, felis felis, pellentesque integer ut cras tempor eget. Proin est amet, ipsum sodales neque mi amet ullam, primis imperdiet sed, ipsum at pellentesque pede praesent curabitur eget, lacus pellentesque rhoncus. Aliquam consectetuer a vestibulum pulvinar venenatis dictumst, aliquam vestibulum mi massa et quam.</p>
        </div>
        <div className="featuredEvents-container">
            <h1>Popular Events</h1>
            <ul>
                {take(15, data.list.filter(x => parseInt(x.RSVPYES.length) >= parseInt(x.RSVPNO.length)).map(event => {
                  return <li key={event._id}><Link to={`/event/${event._id}`}>{event.name}</Link></li>
                }))}
            </ul>
        </div>
      </div>
    </div >
    
  );
}

export default Home;
