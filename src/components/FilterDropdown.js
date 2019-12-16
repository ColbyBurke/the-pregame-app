import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect({...props}) {
  const classes = useStyles();
  const [filter, setFilter] = React.useState('');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = e => {
    setFilter(e.target.value);
    props.parentCallback(e.target.value)
  };

  return (
    <div className="filterDropdown-container">
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          Filter
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={filter}
          onChange={handleChange}
          labelWidth={labelWidth}
          style={{width: '500px'}}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'age'}>Age</MenuItem>
          <MenuItem value={'upcoming'}>Upcoming</MenuItem>
          <MenuItem value={'popular'}>Popular</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
