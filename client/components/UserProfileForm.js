import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserThunk } from '../store/auth';
import { useHistory } from 'react-router-dom';
import { distanceConverter, getCoords, timeConverter } from '../utils';
import { avatarList } from '../../script/seedData';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '92%',
      flexGrow: 1,
      textAlign: 'center',
    },
  },
  avatar: {
    height: 200,
    width: 200,
    margin: 'auto',

    textAlign: 'center',
  },
  button: {
    margin: theme.spacing(1),
  },

  imageDiv: {
    margin: '10px',
  },
  profileContainer: {
    textAlign: 'center',
  },
  container: {
    marginTop: '15px',
  },
  formControl: {
    margin: theme.spacing(1),
    width: '92%',
  },
  title: {
    margin: '8px',
  },
}));

export default function UserProfileForm() {
  const classes = useStyles();
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const [errorVis, setErrorVis] = useState('hidden');

  const [formState, setFormState] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    password: user.password,
    pace: user.pace * 1,
    distance: user.distance * 1,
    id: user.id,
    address: user.address,
    homeLat: user.homeLat,
    homeLng: user.homeLng,
    newProfile: user.newProfile,
    profileImg: user.profileImg,
  });

  const changeHandler = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    console.log(formState);
  };

  const submitHandler = async () => {
    const newCoord = await getCoords(formState.address);
    console.log('newCoord in submit handler', newCoord);

    if (newCoord === 'error') {
      setErrorVis('visible');
    } else {
      dispatch(
        updateUserThunk({
          ...formState,
          homeLat: newCoord[0],
          homeLng: newCoord[1],
        })
      );
      history.push(`/users/${user.id}/profile`);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" className={classes.title}>
        Edit Profile
      </Typography>
      <Box display="flex" justifyContent="space-around" flexWrap="wrap">
        <Container maxWidth="sm">
          <form className={classes.root} noValidate autoComplete="off">
            <Box>
              <div className={classes.imageDiv}>
                <Avatar
                  className={classes.avatar}
                  id="avatar"
                  alt={`${user.username}`}
                  src={`${user.profileImg}`}
                />
              </div>
            </Box>
            <Button
              className={classes.button}
              variant="outlined"
              color="primary"
            >
              Add/Edit Avatar
            </Button>
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
              defaultValue={user.address ? user.address : ''}
              variant="outlined"
              onChange={changeHandler}
            />
            {errorVis === 'visible' ? (
              <Box component="div" color="red" fontWeight="fontWeightBold">
                Unfortunately we are unable find this address. Please enter a
                new address
              </Box>
            ) : (
              ''
            )}
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Preferred Pace
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                value={formState.pace}
                onChange={changeHandler}
                label="pace"
                name="pace"
              >
                <MenuItem value={0}>
                  <em>All</em>
                </MenuItem>
                <MenuItem value={240}>4:00 min/mi</MenuItem>
                <MenuItem value={270}>4:30 min/mi</MenuItem>
                <MenuItem value={300}>5:00 min/mi</MenuItem>
                <MenuItem value={330}>5:30 min/mi</MenuItem>
                <MenuItem value={360}>6:00 min/mi</MenuItem>
                <MenuItem value={390}>6:30 min/mi</MenuItem>
                <MenuItem value={420}>7:00 min/mi</MenuItem>
                <MenuItem value={450}>7:30 min/mi</MenuItem>
                <MenuItem value={480}>8:00 min/mi</MenuItem>
                <MenuItem value={510}>8:30 min/mi</MenuItem>
                <MenuItem value={540}>9:00 min/mi</MenuItem>
                <MenuItem value={570}>9:30 min/mi</MenuItem>
                <MenuItem value={600}>10:00 min/mi</MenuItem>
                <MenuItem value={630}>10:30 min/mi</MenuItem>
                <MenuItem value={660}>11:00 min/mi</MenuItem>
                <MenuItem value={690}>11:30 min/mi</MenuItem>
                <MenuItem value={720}>12:00 min/mi</MenuItem>
                <MenuItem value={10000}>12:00+ min/mi</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Preferred Distance
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                value={formState.distance}
                onChange={changeHandler}
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
          </form>
        </Container>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={submitHandler}
        >
          Save Changes
        </Button>
      </Box>
    </Container>
  );
}
