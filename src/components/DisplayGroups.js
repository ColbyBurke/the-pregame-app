import React from "react";
import FilterDropdown from "./FilterDropdown";
import InputBar from "./InputBar";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

export default function DisplayGroups() {
  return (
    <div className="displayGroups-container">
      <h3>Search for events using filters like age, upcoming, or popular</h3>
      <FilterDropdown></FilterDropdown>
      <InputBar></InputBar>
      <div className="displayGroups-placeholder">
        <h1>Good group</h1>
        <Link to="/events/details">details</Link>
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
          label="Forum"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Events"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Members"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Age Range"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Private Forum"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Rating"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
        />
      </div>
      <div className="displayGroups-placeholder">
        <h1>Good group</h1>
        <Link to="/events/details">details</Link>
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
          label="Forum"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Events"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Members"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Age Range"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Private Forum"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Rating"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
        />
      </div>
    </div>
  );
}
