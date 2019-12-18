import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";
import { TextField } from "@material-ui/core";
import Map from "./Map"
import { useAuth0 } from "../react-auth0-spa";
import AlertDialog from "./AlertDialog"

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
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const { loading, user } = useAuth0();
  console.log(props);
  const [data, dispatch] = useReducer(dataReducer, initialData);
  const [RSVPYES, setRSVPYES] = useState("")
  const [RSVPNO, setRSVPNO] = useState("")
  useEffect(() => {
    axios
      .get(`http://localhost:2500/event/${props.match.params.id}`)
      .then(response => {
        console.log(response.data);
        setRSVPYES(response.data[0].RSVPYES)
        setRSVPNO(response.data[0].RSVPNO)
        dispatch({ type: "SET_LIST", list: response.data });
      })
      .catch(() => {
        dispatch({ type: "SET_ERROR" });
      });
  }, []);

  const handlePutGoing = (id, email) => {
    if(RSVPNO.includes(email)){
        setRSVPNO(RSVPNO.splice(1, email))
    }
    console.log("rsvp yes with concat " + RSVPYES.concat(email));
    console.log('rsvp no without concat ' + RSVPNO);
    
    
    axios.put(`http://localhost:2500/event/${id}`,
    {RSVPYES: RSVPYES.concat(email),
    RSVPNO: RSVPNO}
  ).then(function(response) {
    console.log(response);
  }).catch(function(error) {
    console.log(error);
  });}
  
  const handlePutNotGoing = (id, email) => {
    if(RSVPYES.includes(email)){
      setRSVPNO(RSVPYES.splice(1, email))
  }
  console.log("rsvp no with concat " + RSVPNO.concat(email));
  console.log('rsvp yes without concat ' + RSVPYES);
    axios.put(`http://localhost:2500/event/${id}`,
    {RSVPNO: RSVPNO.concat(email),
    RSVPYES: RSVPYES}
  ).then(function(response) {
    console.log(response);
  }).catch(function(error) {
    console.log(error);
  });}
    
  console.log(RSVPYES)
 
  if(loading || !user) {
    return (
    <div className="event-details-container">
    <h2>
      {" "}
      {data.list
      
        .filter(element => element._id === props.match.params.id)
        .map(event => {
          return (
            <div key={event._id}>
              {!isAuthenticated && <div></div>}
              
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
                            <p>Going: {event.RSVPYES.length}</p>
              <p>Not Going: {event.RSVPYES.length}</p>
            </div>

          );
        })}
    </h2>
  </div>
    )
  }
  return (

    <div className="event-details-container">
      <div>
        {" "}
        {data.list
          .filter(element => element._id === props.match.params.id)
          .map(event => {
            return (
              <div key={event._id}>
                {!isAuthenticated && <div></div>}
                {isAuthenticated && <AlertDialog props={{RSVPYES: RSVPYES, RSVPNO: RSVPNO, page: "details", handlePutGoing, handlePutNotGoing, eventId: event._id, email: user.email}}/>}

                
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
              <p>Going: {event.RSVPYES.length}</p>
              <p>Not Going: {event.RSVPYES.length}</p>
              </div>

            );
          })}
      </div>
    </div>
  );
}

export default EventDetails;
