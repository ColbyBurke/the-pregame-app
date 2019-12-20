import React, { useReducer, useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import { TextField } from "@material-ui/core";
import AlertDialog from "./AlertDialog";
import { useAuth0 } from "../react-auth0-spa";
import UpdateGroup from "./UpdateGroup"
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

function GroupDetails(props) {
  const [name, setName] = useState('')
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const { loading, user } = useAuth0();
  const [member, setMembers] = useState('')
  const [leader, setLeader] = useState("")
  console.log(props);
  const [data, dispatch] = useReducer(dataReducer, initialData);
  useEffect(() => {
    axios
      .get(`http://localhost:2500/group/${props.match.params.id}`)
      .then(response => {
        console.log(response);
        setLeader(response.data[0].groupLeader)
        setName(response.data[0].name)
        setMembers(response.data[0].members)

        dispatch({ type: "SET_LIST", list: response.data });
      })
      .catch(() => {
        dispatch({ type: "SET_ERROR" });
      });
  }, []);
  const handleDelete = (id) => {
    axios.delete(`http://localhost:2500/group/${id}`)
  }
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
  if(loading || !user){
    return <div>Loading...</div>
  }
  if(leader === user.email){
  return (
    <div className="group-details-container">
      <h2>
        {" "}
        {data.list
          .filter(element => element._id === props.match.params.id)
          .map(group => {
            return (
              <div key={group._id}>
                                <Card
                  className="event-details-card"
                  style={{ width: "80%", margin: "0 auto" }}
                >
                  <div className="name-age">
                    <div className="event-details-name">{group.name}</div>
                  </div>

                  <Card className='event-details-card2' style={{ width: "80%", margin: "0 auto" }}>
                  <div id="event-details-creator">Creator: {group.groupLeader}</div>
                  <div className="event-details-age">Required age: {group.age}</div>

                  <div className="event-details-description">
                    {group.description}
                  </div>
                  <p>Members: {group.members.length}</p>
                  </Card>
                    <div style={{display: 'flex', justifyContent: 'center', marginBottom: '10px'}}>
                                          <Button variant="outlined" onClick={() => handleDelete(group._id)}>
                      <Link to='/' style={{textDecoration: 'none', color: 'red'}}>Delete</Link>
                    </Button>
                    </div>

                </Card>                
              <UpdateGroup props={{id: props.match.params.id, name: group.name, comments: group.comments, events: group.events, description: group.description, age: group.age}}/>
              </div>
            );
          })}

      </h2>
    </div>
  );
  }
  return (
    <div className="group-details-container">
      <h2>
        {" "}
        {data.list
          .filter(element => element._id === props.match.params.id)
          .map(group => {
            return (
              <div key={group._id}>
                <Card
                  className="event-details-card"
                  style={{ width: "80%", margin: "0 auto" }}
                > 
                                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>

                                     <AlertDialog props={{page: 'group', name: name, handlePutJoin, handleLeaveGroup, groupId: group._id, email: user.email}}></AlertDialog>
</div>
                  <div className="name-age">

                    <div className="event-details-name">{group.name}</div>
                  </div>

                  <Card className='event-details-card2' style={{ width: "80%", margin: "0 auto" }}>
                  <div id="event-details-creator">Creator: {group.groupLeader}</div>
                  <div className="event-details-age">Required age: {group.age}</div>

                  <div className="event-details-description">
                    {group.description}
                  </div>
                  <p>Members: {group.members.length}</p>
                  </Card>

                </Card>  
              
              </div>
            );
          })}

      </h2>
    </div>
  );
  }
  


export default GroupDetails;
