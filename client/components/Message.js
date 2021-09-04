import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
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
