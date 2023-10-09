import axios from "axios";
import EventForm from "../components/EventForm";
import { ActionFunctionArgs, redirect } from "react-router-dom";
import IEventProps from "../interfaces/IEventsProps";

const NewEventPage = () => {
  return (
    <div>
      <EventForm  method="POST"/>
    </div>
  );
};

export default NewEventPage;
