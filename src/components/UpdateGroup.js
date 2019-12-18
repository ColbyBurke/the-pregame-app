import React, { useEffect, useState } from "react";
import axios from "axios"
import { TextField } from '@material-ui/core'

function UpdateGroup({props}) {
  const [name, setName] = useState("");
  const [comments, setComments] = useState("");
  const [events, setEvents] = useState("");
  const [description, setDescription] = useState("");
  const [age, setAge] = useState("");
  
  useEffect(() => {
    setName(props.name)
    setComments(props.comments)
    setEvents(props.events)
    setDescription(props.description)
    setAge(props.age)
  },[])


  function handleUpdate(name, comments, events, description, age) {
    axios
      .put(`http://localhost:2500/group/${props.id}`, {
        name: name,
        comments: comments,
        events: events,
        description: description,
        age: age
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  return (
    <div className="form-container createGroup">
      <h1>Update your group</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleUpdate(name, comments, events, description, age);
        }}
      >
        <div className="input-container">
          <br></br>
          <TextField
            required
            label="Group Name"
            id="group-name"
            defaultValue={props.name}
            style={{ width: "500px" }}
            onChange={e => setName(e.target.value)}
          ></TextField>
        </div>

        <div className="input-container">
          <TextField
            required
            label="Comments"
            id="group-comments"
            defaultValue={props.comments}
            style={{ width: "500px" }}
            onChange={e => setComments(e.target.value)}
          ></TextField>
        </div>

        <div className="input-container">
          <br></br>
          <TextField
            required
            label="Events"
            id="group-events"
            defaultValue={props.events}
            rows="15"
            style={{ width: "500px" }}
            multiline
            variant="outlined"
            onChange={e => setEvents(e.target.value)}
          ></TextField>
        </div>

        <div className="input-container">
          <br></br>
          <TextField
            required
            label="Description"
            id="group-description"
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
          <TextField
            required
            label="Age Range"
            id="group-age"
            defaultValue={props.age}
            rows="15"
            style={{ width: "500px" }}
            multiline
            variant="outlined"
            onChange={e => setAge(e.target.value)}
          ></TextField>
        </div>
        <div className="input-container">
          <br></br>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateGroup;
