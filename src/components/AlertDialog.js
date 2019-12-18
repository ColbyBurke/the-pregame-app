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
  const handleCreateGroup = () => {
    props.handlePost( 
      props.name,
      props.comments,
      props.events,
      props.groupLeader,
      props.description,
      props.age)
    setOpen(true)
  }
  const handleClickOpen = () => {
    props.handlePutGoing(props.eventId, props.email)
    setOpen(true);
  };
  const handleCreateEvent = () => {
    props.handlePost(props.name, 
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
  return (
    <div>
      {props.page === 'updated' && <Button id="alert-button" variant="outlined" color="primary" onClick={() => setOpen(true)} type="submit" >
        Apply changes
      </Button>}
      {props.page === 'group' && <div><Button id="alert-button" variant="outlined" color="primary" onClick={handleClickOpenForJoin} type="submit" >
        Join
      </Button>
      <Button id="alert-button" variant="outlined" color="primary" onClick={handleLeaveGroup} type="submit" >
        Leave
      </Button> </div>}
      {props.page === 'details' && <div><Button id="alert-button" variant="outlined" color="primary" onClick={handleClickOpen} type="submit" >
        Going
      </Button>
      <Button id="alert-button" variant="outlined" color="primary" onClick={handleClickOpen2} type="submit" >
        Not Going
      </Button> </div>}
      {props.page === 'event' && <div><Button id="alert-button" variant="outlined" color="primary" onClick={handleCreateEvent} type="submit" disabled={props.page === 'event' ? !props.name.length || !props.date.length || !props.age.length || !props.images.length ||  !props.description.length || !props.location.length || props.clicked : !props.name.length || !props.comments.length || !props.events.length || !props.groupLeader.length || !props.description.length ||  !props.age.length || props.clicked}>
        Submit
      </Button></div>}
      {props.page === 'createGroup' && <div><Button id="alert-button" variant="outlined" color="primary" onClick={handleCreateGroup} type="submit" disabled={props.page === 'event' ? !props.name.length || !props.group.length || !props.date.length || !props.age.length || !props.images.length ||  !props.description.length || !props.location.length || props.clicked : !props.name.length || !props.comments.length || !props.events.length || !props.groupLeader.length || !props.description.length ||  !props.age.length || props.clicked}>
        Submit
      </Button></div>}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.page === 'group' && `All set! ${props.name} has been updated`}
            {props.page === 'details' && "You have already RSVP'd!"}
            {props.page === 'event' && 'Event created!'}
            {props.page === 'createGroup' && 'Group created!'}
            {props.page === 'updated' && 'Updated!'}

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
