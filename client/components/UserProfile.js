import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import { deepPurple } from '@material-ui/core/colors';

import { useSelector, useDispatch } from 'react-redux';
import { displayKm, displayPace } from '../utils';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  avatar: {
    // display: 'flex',
    '& > *': {
      // margin: theme.spacing(1),
      height: '200px',
      width: '200px',
      padding: '4px',
      justifyContent: 'center',
    },
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  button: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const UserProfile = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.auth);
  const distance = displayKm(user.distance);
  const pace = displayPace(user.pace);

  return (
    <div>
      <div className={classes.avatar}>
        <Avatar
          id="avatar"
          alt={`${user.username}`}
          src={`${user.profileImg}`}
        />
      </div>
      <Button className={classes.button} variant="contained" color="primary">
        Add/Edit Photo
      </Button>
      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.purple}>FN</Avatar>
          </ListItemAvatar>
          <ListItemText primary="First Name" secondary={user.firstName} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.purple}>LN</Avatar>
          </ListItemAvatar>
          <ListItemText primary="Last Name" secondary={user.lastName} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <img className="singleViewIcon" src="/clock.png" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary=" Preferred Pace"
            secondary={`${pace} km/min`}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <img className="singleViewIcon" src="/path.png" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Preferred Distance"
            secondary={`${distance} km`}
          />
        </ListItem>
      </List>
      <Button variant="contained" color="primary">
        Edit Profile
      </Button>
    </div>
  );
};

export default UserProfile;
