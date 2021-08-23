import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { FullscreenExit, InfoOutlined } from '@material-ui/icons';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 105,
    display: 'flex',
    textAlign: 'center',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const FilterRuns = (props) => {
  const classes = useStyles();
  const [pace, setPace] = React.useState('');
  const [distance, setDistance] = React.useState('');
  const [runStart, setRunStart] = React.useState('');

  const handleChange = (event) => {
    console.log('Event.target: ', event.target);
    if (event.target === 'Pace') {
      setPace(event.target.value);
    }
    if (event.target === 'Distance') {
      setDistance(event.target.value);
    }
    if (event.target === 'runStart') {
      setRunStart(event.target.value);
    }
  };

  return (
    <div>
      <div>Filter By: </div>
      <Box display='flex' justifyContent='space-around'>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Pace</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          value={pace}
          onChange={handleChange}
          label="Pace"
          name="pace"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={12}>12:00</MenuItem>
          <MenuItem value={10}>10:00</MenuItem>
          <MenuItem value={8}>8:00</MenuItem>
        </Select>
      </FormControl>

      {/* second button below */}

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Distance</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          value={distance}
          onChange={handleChange}
          label="distance"
          name="distance"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={2}>2 miles</MenuItem>
          <MenuItem value={3}>3 miles</MenuItem>
          <MenuItem value={10}>10 miles</MenuItem>
        </Select>
      </FormControl>

      {/* third button below */}

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          Run Start
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          value={runStart}
          onChange={handleChange}
          label="Start"
          name="runStart"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>08/31/2021 @ 10:00AM</MenuItem>
          <MenuItem value={12}>08/31/2021 @ 12:00PM</MenuItem>
          <MenuItem value={16}>08/31/2021 @ 4:00PM</MenuItem>
        </Select>
      </FormControl>
      </Box>
    </div>
  );
};

export default FilterRuns;

// Link to Material UI demo:
// https://material-ui.com/components/selects/
