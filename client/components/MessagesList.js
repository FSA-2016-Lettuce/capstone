import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { _getRun, removeRun, _joinRun, _leaveRun } from '../store/run';
import { _getMessages, removeMessages } from '../store/messages';
import { makeStyles } from '@material-ui/core/styles';
import Message from './Message';
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
  container: {
    textAlign: 'center',
  },
}));

export default function MessagesList(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const run = useSelector((state) => state.run.singleRun);
  const messages = useSelector((state) => state.messages);
  const runId = props.match.params.id;

  const routeName = run.id ? run.route.name : '';

  useEffect(() => {
    async function loadStore() {
      await dispatch(_getRun(runId));
      await dispatch(_getMessages(runId));
    }
    loadStore();
    return () => {
      dispatch(removeRun());
      dispatch(removeMessages());
    };
  }, []);

  return (
    <Container className={classes.container} maxWidth="sm">
      <Typography variant="h5" className={classes.header}>
        Chat for {routeName}
      </Typography>
      <List className={classes.root}>
        {messages.map((message) => (
          <Message message={message} key={message.id} />
        ))}
      </List>
    </Container>
  );
}
