import { useNavigate } from 'react-router-dom';
import IEventProps from '../interfaces/IEventsProps';

import classes from './EventForm.module.css';
import { Methods } from '../interfaces/Methods';

interface IEventFormProps {
  event: IEventProps;
  method: Methods; //tenho q mudar dps q eu descobrir pra q serve o method
}

function EventForm({ method, event }:IEventFormProps) {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate('..');
  }
  const newEv = event // so pra parar de aparecer o erro, tenho q tirar dps
  

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows={5} required />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </form>
  );
}

export default EventForm;
