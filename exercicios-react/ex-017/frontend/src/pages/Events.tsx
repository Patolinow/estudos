import { useContext } from "react";
import { EventsContext } from "../contexts/EventsContext";
import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";
import IEventProps from "../interfaces/IEventsProps";
import axios from "axios";

const EventsPage = () => {
  const dataLoaded = useLoaderData() as IEventProps[];

  console.log(dataLoaded);
  // const { errorMessage, events, isLoading } = useContext(EventsContext);
  const eventsList = <EventsList events={dataLoaded} />;
  // const loading = isLoading ? <p>loading...</p> : undefined;
  // const error = errorMessage ? <p>{errorMessage}</p> : undefined;

  return <div>{/*loading || error || */ eventsList}</div>;
};

export async function eventsLoader({}) {
  const url = "http://localhost:8080/events";
  const axiosResponse = await axios.get(url);
  const axiosData: { events: IEventProps[] } = await axiosResponse.data;
  return axiosData.events;
}

export default EventsPage;
