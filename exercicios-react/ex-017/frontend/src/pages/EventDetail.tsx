import { useContext, Suspense } from "react";
import {
  useParams,
  LoaderFunctionArgs,
  useRouteLoaderData,
  ActionFunctionArgs,
  redirect,
  defer,
  Await
} from "react-router-dom";
import { EventsContext } from "../contexts/EventsContext";
import axios from "axios";
import IEventProps from "../interfaces/IEventsProps";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

type Params = { eventId?: string };

const EventDetailPage = () => {
  const params: Params = useParams();
  // const items = useContext(EventsContext).events;

  // if (items) {
  //   const actualEventIndex = items.findIndex((item) => item.id === params.eventId);
  //   if (actualEventIndex === -1) throw new Error("This page doesn't exist.");

  //   const actualEvent = items[actualEventIndex];
  // }

  const {event, events} = useRouteLoaderData("event-detail") as {event: IEventProps, events: IEventProps[]};
  const loading =<p>loading...</p>
  return (
    <>
      <Suspense fallback={loading} >
        <Await resolve={event}>
          {loadedEvent => <EventItem
            key={loadedEvent.id}
            date={loadedEvent.date}
            description={loadedEvent.description}
            id={loadedEvent.id}
            image={loadedEvent.image}
            title={loadedEvent.title}
          />}
        </Await>
      </Suspense>
      <Suspense fallback={loading}>
        <Await resolve={events}>
          {loadedEvents => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

async function loadEvent(params: Params) {
  const id = params.eventId;
  const url = `http://localhost:8080/events/` + id;
  const axiosResponse = await axios.get(url);
  const axiosData: { event: IEventProps[] } = await axiosResponse.data;
  return axiosData.event;
}

async function loader() {
  const url = "http://localhost:8080/events";
  const axiosResponse = await axios.get(url);
  const axiosData: { events: IEventProps[] } = await axiosResponse.data;
  return axiosData.events;
}

export async function detailLoader({ params }: LoaderFunctionArgs) {
  return defer({
    event: await loadEvent(params),
    events: loader(),
  });
}

export async function detailAction({ params, request }: ActionFunctionArgs) {
  const id = params.eventId;
  const url = "http://localhost:8080/events/" + id;
  const response = await axios.delete(url);
  return redirect("/events");
}

export default EventDetailPage;
