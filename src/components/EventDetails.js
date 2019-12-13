import React, { useReducer, useEffect } from "react";
import axios from "axios";
import { TextField } from "@material-ui/core";
import Map from "./Map"

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

function EventDetails(props) {
  console.log(props);
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
    <div className="event-details-container">
      <h2>
        {" "}
        {data.list
          .filter(element => element._id === props.match.params.id)
          .map(event => {
            return (
              <div key={event._id}>
                <TextField
                  id="event-details-name"
                  label="Name"
                  defaultValue={event.name}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                />
                <TextField
                  id="event-details-date"
                  label="Comments"
                  defaultValue={event.date}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                />
               <Map location={event.location}/>

                <TextField
                  id="event-details-comments"
                  label="Comments"
                  defaultValue={event.comments}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                />
                
                 
                    <img src={
                      event.images[0]
                    } alt="party"/>
                  
               
            
               
                <TextField
                  id="event-details-group"
                  label="Group"
                  defaultValue={event.group}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                />
                <TextField
                  id="event-details-age"
                  label="Age"
                  defaultValue={event.age}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                />
                <TextField
                  id="event-details-rating"
                  label="Rating"
                  defaultValue={event.rating}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                />
                <TextField
                  id="event-details-description"
                  label="Description"
                  defaultValue={event.description}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                />
                                <TextField
                  id="event-details-rsvpyes"
                  label="Going"
                  defaultValue={event.RSVPYES}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                />
                                              <TextField
                  id="event-details-rsvpno"
                  label="Not Going"
                  defaultValue={event.RSVPNO}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                />
              </div>
            );
          })}
      </h2>
    </div>
  );
}

export default EventDetails;
