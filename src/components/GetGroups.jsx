import React, {  useEffect, useReducer, useState } from "react";
import FilterDropdown from "./FilterDropdown";
import InputBar from "./InputBar";
import { Link } from "react-router-dom";
import { Card, Button } from "@material-ui/core";
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
      <Card className="GetEvents-filter" style={{width: '1000px'}}>

      <div className="filter-event">
        <h3>Find Your Group</h3>
        <FilterDropdown parentCallback={callbackFromDropdown}></FilterDropdown>

        {filterValue!=="popular" &&<InputBar parentCallback={callbackFromInputBar}></InputBar>}
        </div>
        <div className="button-filter-create-event">
        <Link style={{textDecoration:"none", color:"green"}} to="/group/create"><Button variant="outlined" style={{width: "150px", height:"100px"}}>Create Group</Button></Link>
        </div>
      </Card>
      <br />
      <Card className="each-group-container">
        <br />
        {data.list.filter(group => {
          if(filterValue === 'age'){
            if(parseInt(group.age) > parseInt(input)){
              return group
            }
          }
          else if(filterValue === 'popular'){
            if(parseInt(group.members.length) >= 3){
              return group
            }
          }
          else{
            return group
          }

        }).map(group => {
          return (
            <div key={group._id}>

              <fieldset className="each-group">
              <div>
              <h1 style={{textAlign:"center"}}>{group.name}</h1>
                </div>
                <div>
              <h4>{group.description}</h4>
                </div>
                <div className="location-date-group">
              <p className="group-location">{group.location}  </p>
              <p className="group-date">{group.date}</p>
                </div>
                <div>
              <p>Age: {" "+group.age}</p>
                </div>
                <div>
              <p>Group Leader: {group.groupLeader}</p>
                </div>
          <div style={{textAlign:"center"}}>
        <Button variant="outlined" ><Link  style={{textDecoration:"none", color:"green"}} to={`/group/${group._id}`}>details</Link></Button>
        </div>
        </fieldset>
         
        </div>
          );
        })}
      </Card>
    </div>
  );
}
export default GetGroups;

