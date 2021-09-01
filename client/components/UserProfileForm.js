import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserThunk } from '../store/auth';
import { useHistory } from 'react-router-dom';
import { distanceConverter, getCoords, timeConverter } from '../utils';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '92%',
      textAlign: 'center',
    },
  },
  button: {
    margin: theme.spacing(1),
  },
  container: {
    marginTop: '15px',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function UserProfileForm() {
  const classes = useStyles();
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const distance = distanceConverter(user.distance, 'ft');
  const time = timeConverter(user.pace);

  const [formState, setFormState] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    password: user.password,
    pace: user.pace * 1,
    distance: distance * 1,
    id: user.id,
    address: user.address,
    homeLat: user.homeLat,
    homeLng: user.homeLng,
    newProfile: user.newProfile,
  });

  const changeHandler = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    console.log(formState);
  };

  const submitHandler = async () => {
    const newDistance = distanceConverter(formState.distance, 'mi');
    const newCoord = await getCoords(formState.address);
    console.log('newCoord in submit handler', newCoord);

    dispatch(
      updateUserThunk({
        ...formState,
        distance: newDistance,
        homeLat: newCoord[0],
        homeLng: newCoord[1],
        newProfile: 'NO',
      })
    );
    history.push(`/users/${user.id}/profile`);
  };

  return (
    <Container maxWidth="sm">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          required
          name="firstName"
          label="First Name"
          defaultValue={user.firstName}
          variant="outlined"
          onChange={changeHandler}
        />
        <TextField
          required
          name="lastName"
          label="Last Name"
          defaultValue={user.lastName}
          variant="outlined"
          onChange={changeHandler}
        />
        <TextField
          required
          name="password"
          label="Password"
          defaultValue="***"
          type="password"
          variant="outlined"
          onChange={changeHandler}
        />
        <TextField
          name="address"
          label="Address"
          defaultValue="1600 Amphitheatre Morning View CA"
          variant="outlined"
          onChange={changeHandler}
        />
        <TextField
          name="pace"
          label="Preferred Pace sec/mi"
          defaultValue={user.pace}
          variant="outlined"
          onChange={changeHandler}
        />
        {/* <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-age-native-simple">Pace</InputLabel>
          <Select
            native
            value={user.pace}
            onChange={changeHandler}
            label="Preferred Pace"
            name="pace"
            id="outlined-age-native-simple"
          >
            <option aria-label="None" value="" />
            <option value={270}>UNDER 5 min/mi</option>
            <option value={300}>5 min/mi</option>
            <option value={330}>5.5 min/mi</option>
            <option value={360}>6 min/mi</option>
            <option value={390}>6.5 min/mi</option>
            <option value={420}>7 min/mi</option>
            <option value={450}>7.5 min/mi</option>
            <option value={480}>8 min/mi</option>
            <option value={510}>8.5 min/mi</option>
            <option value={540}>9 min/mi</option>
            <option value={570}>9.5 min/mi</option>
            <option value={600}>10 min/mi</option>
            <option value={630}>10.5 min/mi</option>
            <option value={660}>11 min/mi</option>
            <option value={690}>11.5 min/mi</option>
            <option value={720}>12 min/mi</option>
            <option value={750}>12.5 min/mi</option>
            <option value={780}>13 min/mi</option>
            <option value={810}>13.5 min/mi</option>
            <option value={840}>14 min/mi</option>
            <option value={870}>14.5 min/mi</option>
            <option value={900}>15 min/mi</option>
            <option value={930}>OVER 15 min/mi</option>
          </Select>
        </FormControl> */}
        <TextField
          id="outlined"
          name="distance"
          label="Distance (miles)"
          defaultValue={distance}
          variant="outlined"
          onChange={changeHandler}
        />
      </form>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={submitHandler}
      >
        Save Changes
      </Button>
    </Container>
  );
}
