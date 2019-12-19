import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";
import { TextField } from "@material-ui/core";
import Map from "./Map";
import { useAuth0 } from "../react-auth0-spa";
import AlertDialog from "./AlertDialog";
import { Link } from "react-router-dom";
import UpdateEvent from "./UpdateEvent";
import { Card, Button } from "@material-ui/core";

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
  const [RSVPYES, setRSVPYES] = useState("");
  const [RSVPNO, setRSVPNO] = useState("");
  const [creator, setCreator] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:2500/event/${props.match.params.id}`)
      .then(response => {
        console.log(response.data);
        setCreator(response.data[0].creator);
        setRSVPYES(response.data[0].RSVPYES);
        setRSVPNO(response.data[0].RSVPNO);
        dispatch({ type: "SET_LIST", list: response.data });
      })
      .catch(() => {
        dispatch({ type: "SET_ERROR" });
      });
  }, []);
  const handleDelete = id => {
    axios.delete(`http://localhost:2500/event/${id}`);
  };

  const handlePutGoing = (id, email) => {
    if (RSVPNO.includes(email)) {
      setRSVPNO(RSVPNO.splice(1, email));
    }
    console.log("rsvp yes with concat " + RSVPYES.concat(email));
    console.log("rsvp no without concat " + RSVPNO);

    axios
      .put(`http://localhost:2500/event/${id}`, {
        RSVPYES: RSVPYES.concat(email),
        RSVPNO: RSVPNO
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const handlePutNotGoing = (id, email) => {
    if (RSVPYES.includes(email)) {
      setRSVPNO(RSVPYES.splice(1, email));
    }
    console.log("rsvp no with concat " + RSVPNO.concat(email));
    console.log("rsvp yes without concat " + RSVPYES);
    axios
      .put(`http://localhost:2500/event/${id}`, {
        RSVPNO: RSVPNO.concat(email),
        RSVPYES: RSVPYES
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  console.log(RSVPYES);

  if (loading || !user) {
    return <div>Loading...</div>;
  }
  if (creator === user.email) {
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
                <Card
                  className="event-details-card"
                  style={{ width: "80%", margin: "0 auto" }}
                >
                  <div className="name-age">
                    <div className="event-details-name">{event.name}</div>
                    <div className="event-details-age">Required age: {event.age}</div>
                  </div>

                  <div className="image-map">
                    <Map location={event.location} />
                    <img
                      src={event.images[0]}
                      alt="party"
                      style={{ width: "300px", height: "200px" }}
                    />
                  </div>
                  <Card className='event-details-card2' style={{ width: "80%", margin: "0 auto" }}>
                  <div id="event-details-date">{event.date}</div>
                  <div id="event-details-creator">Creator: {event.creator}</div>

                  <div className="event-details-description">
                    {event.description}
                  </div>
                  <p>Going: {event.RSVPYES.length}</p>
                  <p>Not Going: {event.RSVPYES.length}</p>
                  </Card>
                    <div style={{display: 'flex', justifyContent: 'center', marginBottom: '10px'}}>
                                          <Button variant="outlined" onClick={() => handleDelete(event._id)}>
                      <Link to='/' style={{textDecoration: 'none', color: 'red'}}>Delete</Link>
                    </Button>
                    </div>

                </Card>

                <UpdateEvent
                  props={{
                    id: props.match.params.id,
                    name: event.name,
                    date: event.date,
                    age: event.age,
                    location: event.location,
                    description: event.description
                  }}
                />
              </div>
            );
          })}
      </h2>
    </div>
  );
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

                <Card
                  className="event-details-card"
                  style={{ width: "80%", margin: "0 auto" }}
                >
                                  {isAuthenticated && (
                                    <div style={{marginTop: '10px',display: 'flex', justifyContent: 'center'}}>
                                                        <AlertDialog
                    props={{
                      RSVPYES: RSVPYES,
                      RSVPNO: RSVPNO,
                      page: "details",
                      handlePutGoing,
                      handlePutNotGoing,
                      eventId: event._id,
                      email: user.email
                    }}
                  />
                                    </div>

                )}
                  <div className="name-age">
                    <div className="event-details-name">{event.name}</div>
                    <div className="event-details-age">Required age: {event.age}</div>
                  </div>

                  <div className="image-map">
                    <Map location={event.location} />
                    <img
                      src={event.images[0]}
                      alt="party"
                      style={{ width: "300px", height: "200px" }}
                    />
                  </div>
                  <Card className='event-details-card2' style={{ width: "80%", margin: "0 auto" }}>
                  <div id="event-details-date">{event.date}</div>
                  <div id="event-details-creator">Creator: {event.creator}</div>

                  <div className="event-details-description">
                    {event.description}
                  </div>
                  <p>Going: {event.RSVPYES.length}</p>
                  <p>Not Going: {event.RSVPYES.length}</p>
                  </Card>

                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default EventDetails;
