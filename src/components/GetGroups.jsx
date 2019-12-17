import React, {  useEffect, useReducer, useState } from "react";
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
function GetGroups() {
  const [filterValue, setFilterValue] = useState('')
  const [input, setInput] = useState('')
  const [data, dispatch] = useReducer(dataReducer, initialData);
  useEffect(() => {
    axios
      .get("http://localhost:2500/groups")
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
    <div className="displayGroups-container">
      <Card
        style={{
          width: "540px"
        }}
      >
        <h3>Find Your Group :/</h3>
        <FilterDropdown parentCallback={callbackFromDropdown}></FilterDropdown>
        <InputBar parentCallback={callbackFromInputBar}></InputBar>
      </Card>
      <br />
      <Card className="displayGroups-placeholder">
        <br />
        {data.list.map(group => {
          return (
            <div key={group._id}>
              <Link to={`/group/${group._id}`}>details</Link>
              <TextField
                id="outlined-read-only-input"
                label="Name"
                defaultValue={group.name}
                InputProps={{
                  readOnly: true
                }}
                variant="outlined"
              />
            
                    <TextField
          id="outlined-read-only-input"
          label="Comments"
          defaultValue={group.comments}
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
        />
                <TextField
          id="outlined-read-only-input"
          label="Events"
          defaultValue={group.events}
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
        />
                 <TextField
          id="outlined-read-only-input"
          label="Members"
          defaultValue={group.members}
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
        />
                 <TextField
          id="outlined-read-only-input"
          label="Age Range"
          defaultValue={group.age !== undefined ? group.age : null}
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
        />
                 <TextField
          id="outlined-read-only-input"
          label="Rating"
          defaultValue={group.rating !== undefined ? group.rating: null}
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
        />
        </div>
            //<h1>{group.name}</h1>
          );
        })}
      </Card>
    </div>
  );
}
export default GetGroups;

// export default function DisplayGroups() {
//   return (
//     <div className="displayGroups-container">
//       <br />

//       <br />

//         <TextField
//           id="outlined-read-only-input"
//           label="Forum"
//           defaultValue="Hello World"
//           InputProps={{
//             readOnly: true
//           }}
//           variant="outlined"
//         />
//         <TextField
//           id="outlined-read-only-input"
//           label="Events"
//           defaultValue="Hello World"
//           InputProps={{
//             readOnly: true
//           }}
//           variant="outlined"
//         />
//         <TextField
//           id="outlined-read-only-input"
//           label="Members"
//           defaultValue="Hello World"
//           InputProps={{
//             readOnly: true
//           }}
//           variant="outlined"
//         />
//         <TextField
//           id="outlined-read-only-input"
//           label="Age Range"
//           defaultValue="Hello World"
//           InputProps={{
//             readOnly: true
//           }}
//           variant="outlined"
//         />
//         <TextField
//           id="outlined-read-only-input"
//           label="Private Forum"
//           defaultValue="Hello World"
//           InputProps={{
//             readOnly: true
//           }}
//           variant="outlined"
//         />
//         <TextField
//           id="outlined-read-only-input"
//           label="Rating"
//           defaultValue="Hello World"
//           InputProps={{
//             readOnly: true
//           }}
//           variant="outlined"
//         />
//       </Card>
//       <br />
//       <Card className="displayGroups-placeholder">
//         <h1>Good group</h1>
//         <Link to="/events/details">details</Link>
//         <TextField
//           id="outlined-read-only-input"
//           label="Name"
//           defaultValue="Name goes here"
//           InputProps={{
//             readOnly: true
//           }}
//           variant="outlined"
//         />
//         <TextField
//           id="outlined-read-only-input"
//           label="Forum"
//           defaultValue="Hello World"
//           InputProps={{
//             readOnly: true
//           }}
//           variant="outlined"
//         />
//         <TextField
//           id="outlined-read-only-input"
//           label="Events"
//           defaultValue="Hello World"
//           InputProps={{
//             readOnly: true
//           }}
//           variant="outlined"
//         />
//         <TextField
//           id="outlined-read-only-input"
//           label="Members"
//           defaultValue="Hello World"
//           InputProps={{
//             readOnly: true
//           }}
//           variant="outlined"
//         />
//         <TextField
//           id="outlined-read-only-input"
//           label="Age Range"
//           defaultValue="Hello World"
//           InputProps={{
//             readOnly: true
//           }}
//           variant="outlined"
//         />
//         <TextField
//           id="outlined-read-only-input"
//           label="Private Forum"
//           defaultValue="Hello World"
//           InputProps={{
//             readOnly: true
//           }}
//           variant="outlined"
//         />
//         <TextField
//           id="outlined-read-only-input"
//           label="Rating"
//           defaultValue="Hello World"
//           InputProps={{
//             readOnly: true
//           }}
//           variant="outlined"
//         />
//       </Card>
//     </div>
//   );
// }
