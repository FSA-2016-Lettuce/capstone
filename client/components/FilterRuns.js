import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { _getRuns } from '../store/run';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { FullscreenExit, InfoOutlined } from '@material-ui/icons';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import HomeMap from './HomeMap';
import moment from 'moment';

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
  date: {
    margin: theme.spacing(1),
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 285,
  },
}));

const FilterRuns = () => {
  let dateNow = moment().format('YYYY-MM-DDTHH:mm');
  console.log('WHAT IS dateNow?', dateNow);
  const classes = useStyles();
  const user = useSelector((state) => state.auth);
  const [pace, setPace] = useState(user.pace);
  const [distance, setDistance] = useState(user.distance);
  const [runStart, setRunStart] = useState(dateNow);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadRuns() {
      await dispatch(_getRuns(pace, distance, runStart));
    }
    loadRuns();
  }, [pace, distance, runStart]);

  const handleChange = (event) => {
    console.log('Event.target: ', event.target);
    if (event.target.name === 'pace') {
      setPace(event.target.value);
    }
    if (event.target.name === 'distance') {
      setDistance(event.target.value);
    }
    if (event.target.name === 'runStart') {
      setRunStart(event.target.value);
    }
  };

  return (
    <div>
      <div>Filter By: </div>
      <Box display="flex" justifyContent="space-around" flexWrap="wrap">
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Pace</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            value={pace}
            onChange={handleChange}
            label="pace"
            name="pace"
          >
            <MenuItem value={0}>
              <em>All</em>
            </MenuItem>
            <MenuItem value={240}>4:00</MenuItem>
            <MenuItem value={270}>4:30</MenuItem>
            <MenuItem value={300}>5:00</MenuItem>
            <MenuItem value={330}>5:30</MenuItem>
            <MenuItem value={360}>6:00</MenuItem>
            <MenuItem value={390}>6:30</MenuItem>
            <MenuItem value={420}>7:00</MenuItem>
            <MenuItem value={450}>7:30</MenuItem>
            <MenuItem value={480}>8:00</MenuItem>
            <MenuItem value={510}>8:30</MenuItem>
            <MenuItem value={540}>9:00</MenuItem>
            <MenuItem value={570}>9:30</MenuItem>
            <MenuItem value={600}>10:00</MenuItem>
            <MenuItem value={630}>10:30</MenuItem>
            <MenuItem value={660}>11:00</MenuItem>
            <MenuItem value={690}>11:30</MenuItem>
            <MenuItem value={720}>12:00</MenuItem>
            <MenuItem value={10000}>12:00+</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Distance
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            value={distance}
            onChange={handleChange}
            label="distance"
            name="distance"
          >
            <MenuItem value={0}>
              <em>All</em>
            </MenuItem>
            <MenuItem value={1 * 5280}>1 mile</MenuItem>
            <MenuItem value={2 * 5280}>2 miles</MenuItem>
            <MenuItem value={3 * 5280}>3 miles</MenuItem>
            <MenuItem value={4 * 5280}>4 miles</MenuItem>
            <MenuItem value={5 * 5280}>5 miles</MenuItem>
            <MenuItem value={6 * 5280}>6 miles</MenuItem>
            <MenuItem value={7 * 5280}>7 miles</MenuItem>
            <MenuItem value={8 * 5280}>8 miles</MenuItem>
            <MenuItem value={9 * 5280}>9 miles</MenuItem>
            <MenuItem value={10 * 5280}>10 miles</MenuItem>
            <MenuItem value={11 * 5280}>11 miles</MenuItem>
            <MenuItem value={12 * 5280}>12 miles</MenuItem>
            <MenuItem value={10000 * 5280}>12+ miles</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.date}>
          <TextField
            variant="outlined"
            id="datetime-local"
            label="Start"
            type="datetime-local"
            name="runStart"
            defaultValue={runStart}
            className={classes.textField}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>
      </Box>
      <HomeMap user={user} />
    </div>
  );
};

export default FilterRuns;
