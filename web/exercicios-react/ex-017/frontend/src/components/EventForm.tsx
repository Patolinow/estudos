import {
  ActionFunctionArgs,
  Form,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import IEventProps from "../interfaces/IEventsProps";

import classes from "./EventForm.module.css";
import { Methods } from "../interfaces/Methods";
import axios, { AxiosResponse } from "axios";
interface IEventFormProps {
  event?: IEventProps;
  method?: Methods; //tenho q mudar dps q eu descobrir pra q serve o method
}

function EventForm({ method, event }: IEventFormProps) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const data = useActionData() as { errors: string[] };
  const isSubmitting = navigation.state === "submitting";
  const submitButtonText = isSubmitting ? "loading..." : "Save";

  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" defaultValue={event?.title} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" defaultValue={event?.image} />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" defaultValue={event?.date} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows={5} defaultValue={event?.description} />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{submitButtonText}</button>
      </div>
    </Form>
  );
}

export const eventAction = async ({ request, params }: ActionFunctionArgs) => {
  const data = await request.formData();
  const url = "http://localhost:8080/events/";
  const id = params.eventId
  let response: AxiosResponse<any, any> | null = null
  const eventData = {
    title: data.get("title"),
    date: data.get("date"),
    description: data.get("description"),
    image: data.get("image"),
    id: id || Math.random().toString(),
  };
  

  switch (request.method) {
    case "POST":
      response = await axios.post(url, eventData);

      
      break;
    
    case "PATCH":
      response = await axios.patch(url + id, eventData);
    break;
  }

  if (response?.status === 422) {
    return response;
  }

  return redirect("/events");
};

export default EventForm;
