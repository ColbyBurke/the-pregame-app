import React, {  useEffect, useReducer, useState } from "react";
import FilterDropdown from "./FilterDropdown";
import InputBar from "./InputBar";
import { Link } from "react-router-dom";
import { Card, Button } from "@material-ui/core";
import axios from "axios";
import {useAuth0} from "../react-auth0-spa" 

export const dataReducer = (state, action) => {
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

function GetEvents() { 

   const [filterValue, setFilterValue] = useState('')
   const [input, setInput] = useState('')
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
  const callbackFromDropdown = val => {
    setFilterValue(val);
  };
  const callbackFromInputBar = val => {
    setInput(val);
  };
  console.log(input);

  return (
    <div className="GetEvents-container">
      <Card className="GetEvents-filter">
        <div className="filter-event">
        <h3>Find Your Event :/</h3>
        <FilterDropdown parentCallback={callbackFromDropdown}></FilterDropdown>

        {filterValue!=="popular" &&<InputBar parentCallback={callbackFromInputBar}></InputBar>}
        </div>
        <div className="button-filter-create-event">
        <Link style={{textDecoration:"none", color:"green"}} to="/events/create"><Button variant="outlined" style={{width: "150px", height:"100px"}}>Create Event</Button></Link>
        </div>
      </Card>
      <br />
      <Card className="each-event-container">
        <br />
        {data.list.filter(event => {
          if(filterValue === 'age'){
            if(parseInt(event.age) > parseInt(input)){
              return event
            }
          }
          else if(filterValue === 'popular'){
            if(parseInt(event.RSVPYES.length) >= parseInt(event.RSVPNO.length)){
              return event
            }
          }
          else{
            return event
          }

        }).map(event => {
          return (
            <div key={event._id}>
               <fieldset className="each-event">
              <div>
              <h1 style={{textAlign:"center"}}>{event.name}</h1>
                </div>
                <div>
              <h4>{event.description}</h4>
                </div>
                <div className="location-date-event">
              <p className="event-location">{event.location}  </p>
              <p className="event-date">{event.date}</p>
                </div>
                <div>
              <p>Age: {" "+event.age}</p>
                </div>

                <div>
              <p style={{textAlign:"right"}}><span style={{color: "green"}}>{event.RSVPYES.length+" "}</span>ready for {event.name}</p>
                </div>
                <div>
                <p style={{textAlign:"right"}}><span style={{color: "red"}}>{event.RSVPNO.length+" "}</span>ready for {event.name}</p>
                </div>
                <div>
              <p>Creator: {event.creator}</p>
                </div>
          <div style={{textAlign:"center"}}>
        <Button variant="outlined"><Link  style={{textDecoration:"none", color:"green"}} to={`/event/${event._id}`}>details</Link></Button>
        </div>
        </fieldset>

        </div>
            //<h1>{event.name}</h1>
          );
        })}
      </Card>
    </div>
  );
}
export default GetEvents;