import React, { useReducer, useEffect } from "react";
import axios from "axios";
import { TextField } from "@material-ui/core";

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

function GroupDetails(props) {
  console.log(props);
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
  return (
    <div className="group-details-container">
      <h2>
        {" "}
        {data.list
          .filter(element => element._id === props.match.params.id)
          .map(group => {
            return (
              <div key={group._id}>
                <TextField
                  id="group-details-name"
                  label="Name"
                  defaultValue={group.name}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                />
                <TextField
                  id="group-details-comments"
                  label="Comments"
                  defaultValue={group.comments}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                />
                <TextField
                  id="group-details-events"
                  label="Events"
                  defaultValue={group.events}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                />
                                <TextField
                  id="group-details-members"
                  label="Members"
                  defaultValue={group.members}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                />
                                <TextField
                  id="group-details-ageRange"
                  label="Age Range"
                  defaultValue={group.age}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                />
                                <TextField
                  id="group-details-rating"
                  label="Rating"
                  defaultValue={group.rating}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                />
                                                <TextField
                  id="group-details-groupLeader"
                  label="Group Leader"
                  defaultValue={group.groupLeader}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                />
                                                <TextField
                  id="group-details-description"
                  label="Description"
                  defaultValue={group.description}
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

export default GroupDetails;
