import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { deepPurple } from '@material-ui/core/colors';
import { useSelector } from 'react-redux';
import { displayKm, displayPace } from '../utils';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  avatar: {
    height: 200,
    width: 200,
    margin: 'auto',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  button: {
    margin: theme.spacing(1),
  },
  buttonContainer: {
    textAlign: 'center',
  },
  buttonWidth: {
    width: '90%',
  },
  avatarContainer: {
    textAlign: 'center',
    justifyContent: 'center',
    display: 'flex',
    height: 200,
    width: 200,
  },
  profileContainer: {
    textAlign: 'center',
  },
}));

const UserProfile = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.auth);
  const distance = displayKm(user.distance);
  const pace = displayPace(user.pace);

  return (
    <Container className={classes.profileContainer} maxWidth="sm">
      <Box className={classes.avatarContainer}>
        <Avatar
          className={classes.avatar}
          id="avatar"
          alt={`${user.username}`}
          src={`${user.profileImg}`}
        />
      </Box>
      <Button className={classes.button} variant="outlined" color="primary">
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
            secondary={`${pace} min/km`}
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
      <div className={classes.buttonContainer}>
        <Button
          className={classes.buttonWidth}
          variant="contained"
          color="primary"
        >
          Edit Profile
        </Button>
      </div>
    </Container>
  );
};

export default UserProfile;
