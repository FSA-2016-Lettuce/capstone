import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { _postMessage } from '../store/messages';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: 'auto',
    '& > *': {
      margin: theme.spacing(1),
    },
    display: 'flex',
  },
  textField: {
    '& > *': {
      margin: theme.spacing(1),
    },
    flexGrow: '1',
  },
}));

export default function NewMessageEntry() {
  const classes = useStyles();
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  // Update state of form as user updated text field
  const handleInput = (evt) => {
    const newValue = evt.target.value.trim();
    setContent(newValue);
  };
  // What to do when a user hits the "CHAT!" button:
  const handleSubmit = (evt) => {
    // Prevent default form behavior
    evt.preventDefault();

    // If there's anything in the chatBox, post the message
    if (content.length > 0) {
      dispatch(_postMessage(content));
      setContent('');
    }
  };

  return (
    <Container maxWidth="sm">
      <form className={classes.footer} onSubmit={handleSubmit}>
        <TextField
          size="small"
          label="Say something nice..."
          className={classes.textField}
          value={content}
          variant="filled"
          onChange={handleInput}
        />

        <Button
          className={classes.button}
          type="submit"
          variant="contained"
          color="primary"
        >
          Chat!
        </Button>
      </form>
    </Container>
  );
}
