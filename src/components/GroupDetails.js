import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";
import { TextField } from "@material-ui/core";
import AlertDialog from "./AlertDialog";
import { useAuth0 } from "../react-auth0-spa";


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
  const [name, setName] = useState('')
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const { loading, user } = useAuth0();
  const [member, setMembers] = useState('')
  console.log(props);
  const [data, dispatch] = useReducer(dataReducer, initialData);
  useEffect(() => {
    axios
      .get(`http://localhost:2500/group/${props.match.params.id}`)
      .then(response => {
        console.log(response);
        setName(response.data[0].name)
        setMembers(response.data[0].members)
        dispatch({ type: "SET_LIST", list: response.data });
      })
      .catch(() => {
        dispatch({ type: "SET_ERROR" });
      });
  }, []);
  const handlePutJoin = (id, email) => {
    axios.put(`http://localhost:2500/group/${id}`,
    {members: member.concat(email)}
  ).then(function(response) {
    console.log(response);
  }).catch(function(error) {
    console.log(error);
  });}
  const handleLeaveGroup = (id, email) => {
    axios.put(`http://localhost:2500/group/${id}`,
    {members: member.splice(1, email)}
  ).then(function(response) {
    console.log(response);
  }).catch(function(error) {
    console.log(error);
  });}
  return (
    <div className="group-details-container">
      <h2>
        {" "}
        {data.list
          .filter(element => element._id === props.match.params.id)
          .map(group => {
            return (
              <div key={group._id}>
                <AlertDialog props={{page: 'group', name: name, handlePutJoin, handleLeaveGroup, groupId: group._id, email: user.email}}></AlertDialog>
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
                {console.log(group.members)}
              <p>Members: {group.members.length}</p>
              </div>
            );
          })}
      </h2>
    </div>
  );
}

export default GroupDetails;
