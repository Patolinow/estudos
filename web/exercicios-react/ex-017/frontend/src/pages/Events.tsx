import { useContext, Suspense } from "react";
import { EventsContext } from "../contexts/EventsContext";
import EventsList from "../components/EventsList";
import { Await, defer, useLoaderData } from "react-router-dom";
import IEventProps from "../interfaces/IEventsProps";
import axios from "axios";

const EventsPage = () => {
  const { events } = useLoaderData() as { events: IEventProps[] };

  // const { errorMessage, events, isLoading } = useContext(EventsContext);
  // const loading = isLoading ? <p>loading...</p> : undefined;
  // const error = errorMessage ? <p>{errorMessage}</p> : undefined;

  return (
    <Suspense fallback={<p>loading...</p>}>
      <Await resolve={events}>{(loadedEvents) => <EventsList events={loadedEvents} />}</Await>
    </Suspense>
  );
};

async function loader() {
  const url = "http://localhost:8080/events";
  const axiosResponse = await axios.get(url);
  const axiosData: { events: IEventProps[] } = await axiosResponse.data;
  return axiosData.events;
}

export function eventsLoader() {
  return defer({
    events: loader(),
  });
}

export default EventsPage;
