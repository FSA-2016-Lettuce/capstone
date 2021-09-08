import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { deepPurple } from '@material-ui/core/colors';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { distanceConverter, displayPace } from '../utils';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  avatar: {
    height: 250,
    width: 250,
    margin: 'auto',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  box: {
    justifySelf: 'center',
  },
  button: {
    margin: theme.spacing(1),
  },
  buttonWidth: {
    width: '90%',
  },
  profileContainer: {
    textAlign: 'center',
  },
  imageDiv: {
    margin: '10px',
    justifySelf: 'flex-end',
  },
  profilePic: {
    justifyContent: 'center',
  },
  title: {
    margin: '8px',
  },
}));

const UserProfile = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.auth);
  const distance = distanceConverter(user.distance, 'ft');
  const pace = moment.utc(user.pace * 1000).format('m:ss');

  return (
    <Container className={classes.profileContainer} maxWidth="sm">
      <Typography variant="h5" className={classes.title}>
        Profile
      </Typography>
      <List className={classes.root}>
        <ListItem className={classes.profilePic}>
          <Box className={classes.box}>
            {/* <div className={classes.imageDiv}>
              <Avatar
                className={classes.avatar}
                id="avatar"
                alt={`${user.username}`}
                src={`${user.profileImg}`}
              />
            </div> */}
          </Box>
        </ListItem>
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
            secondary={`${pace} min/mi`}
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
            secondary={`${distance} mi`}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <img className="singleViewIcon" src="/pin.png" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Address" secondary={`${user.address}`} />
        </ListItem>
      </List>
      <div className={classes.buttonContainer}>
        <Link to={`/users/${user.id}/profile/edit`}>
          <Button
            className={classes.buttonWidth}
            variant="contained"
            color="primary"
          >
            Edit Profile
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default UserProfile;
