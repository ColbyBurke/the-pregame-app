import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog({props}) {
  const [open, setOpen] = React.useState(false);

  console.log(props);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button id="alert-button" variant="outlined" color="primary" onClick={handleClickOpen} type="submit" disabled={props.page === 'event' ? !props.name.length || !props.group.length || !props.date.length || !props.age.length || !props.images.length ||  !props.description.length || !props.location.length || props.clicked : !props.name.length || !props.comments.length || !props.events.length || !props.groupLeader.length || !props.description.length ||  !props.age.length || props.clicked}>
        Submit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.page === 'event' && 'Event created!'}
            {props.page === 'group' && 'Group created!'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
