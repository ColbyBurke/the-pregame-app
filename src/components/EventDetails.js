import React from "react";
import TextField from "@material-ui/core/TextField";

export default function EventDetails() {
  return (
    <div className="eventDetails-container">
      <TextField
        id="outlined-read-only-input"
        label="Name"
        defaultValue="Name goes here"
        InputProps={{
          readOnly: true
        }}
        variant="outlined"
      />
      <TextField
        id="outlined-read-only-input"
        label="Date"
        defaultValue="Hello World"
        InputProps={{
          readOnly: true
        }}
        variant="outlined"
      />
      <TextField
        id="outlined-read-only-input"
        label="Location"
        defaultValue="Hello World"
        InputProps={{
          readOnly: true
        }}
        variant="outlined"
      />
            <TextField
        id="outlined-read-only-input"
        label="Images"
        defaultValue="Hello World"
        InputProps={{
          readOnly: true
        }}
        variant="outlined"
      />
            <TextField
        id="outlined-read-only-input"
        label="RSVP"
        defaultValue="Hello World"
        InputProps={{
          readOnly: true
        }}
        variant="outlined"
      />
            <TextField
        id="outlined-read-only-input"
        label="Forum"
        defaultValue="Hello World"
        InputProps={{
          readOnly: true
        }}
        variant="outlined"
      />
            <TextField
        id="outlined-read-only-input"
        label="Group"
        defaultValue="Hello World"
        InputProps={{
          readOnly: true
        }}
        variant="outlined"
      />
            <TextField
        id="outlined-read-only-input"
        label="Description"
        defaultValue="Hello World"
        InputProps={{
          readOnly: true
        }}
        variant="outlined"
      />
    </div>
  );
}
