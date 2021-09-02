import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';


export default function EditLineModal() {
  return (
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
        To Edit a Route:
        - Click on the 'edit layer' button
        - Click on the desired point you wish to edit
        - Drag the point to your desired location
      </DialogContentText>
    </DialogContent>
  );
}
