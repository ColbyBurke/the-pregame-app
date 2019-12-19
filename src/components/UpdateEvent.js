import React, { useEffect, useState } from "react";
import axios from "axios";
import { TextField } from "@material-ui/core";
import AlertDialog from './AlertDialog'

function UpdateEvent({ props }) {
    console.log(props)
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(props.name);
    setDate(props.date);
    setAge(props.age);
    setLocation(props.location);
    setDescription(props.description);
  }, []);
  function handleUpdate(name, date, age, location, description) {
    axios
      .put(`http://localhost:2500/event/${props.id}`, {
        name: name,
        date: date,
        age: age,
        location: location,
        description: description
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  return (
    <div className="form-container">
      <h1>Update your Event</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleUpdate(name, date, age, location, description);
        }}
      >
        <div className="input-container">
          <br></br>
          <TextField
            required
            label="Event Name"
            id="event-name"
            defaultValue={props.name}
            style={{ width: "500px" }}
            onChange={e => setName(e.target.value)}
          ></TextField>
        </div>

        <div className="input-container">
          <TextField
            required
            label="Date"
            id="event-date"
            defaultValue={props.date}
            style={{ width: "500px" }}
            onChange={e => setDate(e.target.value)}
          ></TextField>
        </div>
        <div className="input-container">
          <TextField
            required
            label="Age Range"
            id="event-age"
            defaultValue={props.age}
            style={{ width: "500px" }}
            onChange={e => setAge(e.target.value)}
          ></TextField>
        </div>

        <div className="input-container">
          <TextField
            required
            label="Location"
            id="event-location"
            defaultValue={props.location}
            style={{ width: "500px" }}
            onChange={e => setLocation(e.target.value)}
          ></TextField>
        </div>

        <div className="input-container">
          <br></br>
          <TextField
            required
            label="Description"
            id="event-description"
            defaultValue={props.description}
            rows="15"
            style={{ width: "500px" }}
            multiline
            variant="outlined"
            onChange={e => setDescription(e.target.value)}
          ></TextField>
        </div>
        <div className="input-container">
          <br></br>
          <AlertDialog props={{page: 'updated'}}/>
        </div>
      </form>
    </div>
  );
}

export default UpdateEvent;
