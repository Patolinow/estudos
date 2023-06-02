import classes from './Notification.module.css';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';

interface INotificationProps {
  title: string;
  message: string | undefined;
  isOpen: boolean;
  toggleHandler: () => void;
}

const Notification = (props:INotificationProps ) => {
  const cssClasses = `${classes.notification} ${classes.error}`;

  return (
    <Dialog className={classes.notification} open={props.isOpen} onClick={props.toggleHandler}>

      <DialogTitle className={cssClasses}>
      <h2>{props.title}</h2>
      </DialogTitle>

      <DialogContent className={cssClasses}>
        <p>{props.message}</p>
      </DialogContent>
    </Dialog>
  );
};

export default Notification;
