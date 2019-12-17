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
  const handleClickOpenForJoin = () => {
    props.handlePutJoin(props.groupId, props.email)
    setOpen(true)
  }
  const handleLeaveGroup = () => {
    props.handleLeaveGroup(props.groupId, props.email)
    setOpen(true)
  }
  const handleClickOpen = () => {
    props.handlePutGoing(props.eventId, props.email)
    setOpen(true);
  };
  const handleCreateEvent = () => {
    props.handlePost(props.name, props.group,
                  props.date,
      props.age,
      props.location,
      props.images,
      props.description)
    setOpen(true);
  };
  const handleClickOpen2 = () => {
    props.handlePutNotGoing(props.eventId, props.email)
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  if(props.page === 'group'){
      return (
        <div>
          <Button id="alert-button" variant="outlined" color="primary" onClick={handleClickOpenForJoin} type="submit" >
            Join
          </Button>
          <Button id="alert-button" variant="outlined" color="primary" onClick={handleLeaveGroup} type="submit" >
            Leave
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
                {`All set! ${props.name} has been updated`}
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
if(props.page==="details") {
  return (
    <div>
      <Button id="alert-button" variant="outlined" color="primary" onClick={handleClickOpen} type="submit" >
        Going
      </Button>
      <Button id="alert-button" variant="outlined" color="primary" onClick={handleClickOpen2} type="submit" >
        Not Going
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
            You have already RSVP'd!
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
if(props.page === 'event'){
  return (
    <div>
      <Button id="alert-button" variant="outlined" color="primary" onClick={handleCreateEvent} type="submit" disabled={props.page === 'event' ? !props.name.length || !props.group.length || !props.date.length || !props.age.length || !props.images.length ||  !props.description.length || !props.location.length || props.clicked : !props.name.length || !props.comments.length || !props.events.length || !props.groupLeader.length || !props.description.length ||  !props.age.length || props.clicked}>
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
  
}
