import React, {  useEffect, useReducer } from "react";
import FilterDropdown from "./FilterDropdown";
import InputBar from "./InputBar";
import { Link } from "react-router-dom";
import { Card, TextField } from "@material-ui/core";
import axios from "axios";

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
    <div className="GetEvents-container">
      <Card
        style={{
          width: "540px"
        }}
      >
        <h3>Find Your Event :/</h3>
        <FilterDropdown></FilterDropdown>
        <InputBar></InputBar>
      </Card>
      <br />
      <Card className="GetEvents-placeholder">
        <br />
        {data.list.map(event => {
          return (
            <div key={event._id}>
              <Link to={`/event/${event._id}`}>details</Link>
              <TextField
                id="outlined-read-only-input"
                label="Name"
                defaultValue={event.name}
                InputProps={{
                  readOnly: true
                }}
                variant="outlined"
              />
            
                    <TextField
          id="outlined-read-only-input"
          label="Comments"
          defaultValue={event.comments}
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
        />
                <TextField
          id="outlined-read-only-input"
          label="Group"
          defaultValue={event.group}
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
        />
                 <TextField
          id="outlined-read-only-input"
          label="Location"
          defaultValue={event.location}
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
        />
                 <TextField
          id="outlined-read-only-input"
          label="Age Range"
          defaultValue={event.age}
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
        />
                 <TextField
          id="outlined-read-only-input"
          label="Description"
          defaultValue={event.description}
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
        />
              <TextField
          id="outlined-read-only-input"
          
          defaultValue={event.image}
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
        />
         <TextField
          id="outlined-read-only-input"
          label="Going"
          defaultValue={event.RSVPYES}
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
        />
         <TextField
          id="outlined-read-only-input"
          label="Not Going"
          defaultValue={event.RSVPNO}
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
        />
        </div>
            //<h1>{event.name}</h1>
          );
        })}
      </Card>
    </div>
  );
}
export default GetEvents;