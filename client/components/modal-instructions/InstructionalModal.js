import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PolylineHelp from './PolylineHelp';
import EditControl from './EditControl';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '95%',
      display: 'flex'
    },
  },
  modal: {
    display: 'flex',
    justifySelf: 'end',
    margin: '.5em',
  },
}));

export const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function InstructionalModal() {
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState('polyline');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    setTopic(null)
    handleClose();
    setTimeout(() => handleClickOpen(), 100);
  };

  const resetTopic = () => {
    setTopic('polyline');
    handleClose()
  }
  const divStyle = {
    display: 'grid'
  }

  const classes = useStyles();
  return (
    <div style= {divStyle}>
      <Button
        variant="outlined"
        color="primary"
        className={classes.modal}
        onClick={handleClickOpen}
      >
        Need Help?
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        {' '}
        {topic === 'polyline' ? (
          <>
            <DialogTitle id="alert-dialog-slide-title">
              {'How to Create a Route'}
            </DialogTitle>
            <PolylineHelp />
          </>
        ) : (
          <>
          <DialogTitle id="alert-dialog-slide-title">
              {'How to Edit a Route'}
          <EditControl />
          <Button onClick={resetTopic} color="primary" variant="outlined">
            Ready to Create
          </Button>
          </DialogTitle>
          </>
        )}
        <DialogActions>
          {topic === 'polyline' ? (
            <>
            <Button onClick={handleNext} color="primary" variant="outlined">
              What else ya' got?
            </Button>
            <Button onClick={resetTopic} color="primary" variant="outlined">
            Ready to Create
          </Button>
          </>
          ) : null}

        </DialogActions>
      </Dialog>
    </div>
  );
}
