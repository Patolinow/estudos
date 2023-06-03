import { useAppDispatch } from '../../hooks/use-redux';
import { cartActions } from '../../store/reducers/CartSlice';
import classes from './Notification.module.css';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';

interface INotificationProps {
  title: string;
  message: string | undefined;
  isOpen: boolean;
}

const Notification = (props:INotificationProps ) => {
  const dispatch = useAppDispatch()
  const cssClasses = `${classes.notification} ${classes.error}`;
  
  const clickHandler = () => {
    dispatch(cartActions.toggleError())
  }

  return (
    <Dialog className={classes.notification} open={props.isOpen} onClick={clickHandler}>

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
