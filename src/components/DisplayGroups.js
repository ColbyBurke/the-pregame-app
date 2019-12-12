import React from "react";
import FilterDropdown from "./FilterDropdown";
import InputBar from "./InputBar";
import { Link } from "react-router-dom";
import { Card, TextField } from '@material-ui/core'


export default function DisplayGroups() {
  return (
    <div className="displayGroups-container">
      <br />
      <Card style={{
        width: '540px'
      }}>
        <h3>Find Your Group :/</h3>
        <FilterDropdown></FilterDropdown>
        <InputBar></InputBar>
      </Card>
      <br />
      <Card className="displayGroups-placeholder">
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
      </Card>
      <br />
      <Card className="displayGroups-placeholder">
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
      </Card>
    </div>
  );
}
