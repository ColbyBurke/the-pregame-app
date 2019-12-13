/* eslint-disable no-use-before-define */
import React, {useReducer, useState, useEffect, Fragment} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios'
import {Link} from 'react-router-dom'


const dataReducer = (state, action) => {
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

export default function FreeSolo() {
    const [events, setEvents]= useState([])
    const [data, dispatch] = useReducer(dataReducer, initialData);
    
        useEffect(() => {
          axios
            .get("http://localhost:2500/events")
            .then(response => {
              console.log(response);
              dispatch({ type: "SET_LIST", list: response.data });
            })
            .catch(() => {
              dispatch({ type: "SET_ERROR" });
            });
        }, []);
        console.log(data.list)
  return (
    <div style={{ width: 300 }}>
      
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={data.list.map(event => event.name)}
        renderInput={params => (

          <TextField
           
            {...params}
            label="Search input"
            margin="normal"
            variant="outlined"
            fullWidth
            InputProps={{ ...params.InputProps, type: 'search' }}
            
          />
        )}
      />
      
    </div>
  );
}
