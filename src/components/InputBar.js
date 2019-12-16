import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));



export default function BasicTextFields({...props}) {
  const classes = useStyles();

const handleChange = (e) => {
  props.parentCallback(e.target.value)
}
  return (
    <form className={classes.root} noValidate autoComplete="off" id="inputBar-container">
      <TextField onChange={handleChange} id="outlined-basic" label="Search events..." variant="outlined" style={{width: '500px'}} />
    </form>
  );
}
