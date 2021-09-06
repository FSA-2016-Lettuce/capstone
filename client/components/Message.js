import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  header: {
    marginTop: '10px',
  },
}));

export default function Message(props) {
  const classes = useStyles();
  const message = props.message;
  const displayDate = moment(message.createdAt).format('MMM Do YYYY, h:mm a');
  const displayMessage = `${message.user.firstName}: ${message.content}`;

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={message.user.profileImg} />
      </ListItemAvatar>
      <ListItemText primary={displayMessage} secondary={displayDate} />
    </ListItem>
  );
}
