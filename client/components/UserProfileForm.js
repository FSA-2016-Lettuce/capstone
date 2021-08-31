import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserThunk } from '../store/auth';
import { useHistory } from 'react-router-dom';
import { distanceConverter, getCoords } from '../utils';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50%',
      textAlign: 'center',
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function UserProfileForm() {
  const classes = useStyles();
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const [formState, setFormState] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    password: user.password,
    pace: user.pace * 1,
    distance: user.distance,
    id: user.id,
    address: user.address,
    homeLat: user.homeLat,
    homeLng: user.homeLng,
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
      })
    );
    history.push(`/users/${user.id}/profile`);
  };

  return (
    <Container className={classes.container} maxWidth="sm">
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
        <TextField
          id="outlined"
          name="distance"
          label="Distance (miles)"
          defaultValue={user.distance}
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
