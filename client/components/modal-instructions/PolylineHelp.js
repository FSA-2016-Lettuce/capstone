import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Typography } from '@material-ui/core';



export default function PolylineHelp() {
  return (
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
      To get started, click the "Draw a polyline" button in the top right
  corner of the map. Note: The first point created for the Route will be
  assumed to be the starting location.

      </DialogContentText>
    </DialogContent>
  );
}
