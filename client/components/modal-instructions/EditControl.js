import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Typography } from '@material-ui/core';

export default function EditControl() {
  return (
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
        To Edit a Route: - Simply Click on the 'edit layers' button
        - Click and
        drag your desired point to wherever your heart desires - or don't. You do you
      </DialogContentText>
    </DialogContent>
  );
}
