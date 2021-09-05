import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { _getRun, removeRun } from '../store/run';
import { _getMessages, removeMessages } from '../store/messages';
import { makeStyles } from '@material-ui/core/styles';
import Message from './Message';
import NewMessageEntry from './NewMessageEntry';
import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  header: {
    marginTop: '10px',
  },
  container: {
    textAlign: 'center',
    minHeight: '75vh',
  },
  noChat: {
    marginTop: '10px',
  },
}));

export default function MessagesList(props) {
  const classes = useStyles();
  const history = useHistory();
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

  const handleBack = () => {
    history.push(`/runs/${runId}`);
  };

  return (
    <>
      <Button
        className={classes.button}
        type="submit"
        variant="contained"
        color="secondary"
        onClick={handleBack}
      >
        Back
      </Button>
      <Container className={classes.container} maxWidth="sm">
        <Typography variant="h5" className={classes.header}>
          Chat for {routeName}
        </Typography>
        {messages.length ? (
          <List className={classes.root}>
            {messages.map((message) => (
              <Message message={message} key={message.id} />
            ))}
          </List>
        ) : (
          <Typography variant="body1" className={classes.noChat}>
            Be the first to chat on this Run!
          </Typography>
        )}
      </Container>
      <NewMessageEntry />
    </>
  );
}
