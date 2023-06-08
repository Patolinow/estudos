import { useContext } from "react";
import { useParams, LoaderFunctionArgs, useRouteLoaderData } from "react-router-dom";
import { EventsContext } from "../contexts/EventsContext";
import axios from "axios";
import IEventProps from "../interfaces/IEventsProps";
import EventItem from "../components/EventItem";

type Params = { eventId?: string };

const EventDetailPage = () => {
  const params: Params = useParams();
  // const items = useContext(EventsContext).events;
  let event: JSX.Element | undefined;

  // if (items) {
  //   const actualEventIndex = items.findIndex((item) => item.id === params.eventId);
  //   if (actualEventIndex === -1) throw new Error("This page doesn't exist.");

  //   const actualEvent = items[actualEventIndex];
   // }

    const data = useRouteLoaderData("event-detail") as IEventProps
    console.log(data)


    event = (
      <EventItem
        key={data.id}
        date={data.date}
        description={data.description}
        id={data.id}
        image={data.image}
        title={data.title}
      />
    );
 

  return (
    <div>
      <h1>Event Detail</h1>
      {event || <p>This Event doesn't exist</p>}
    </div>
  );
};

export async function detailLoader({ params }: LoaderFunctionArgs) {
  const id = params.eventId
  const url = `http://localhost:8080/events/` + id;
  const axiosResponse = await axios.get(url);
  const axiosData: { event: IEventProps[] } = await axiosResponse.data;
  console.log(axiosData)
  return axiosData.event;
}

export default EventDetailPage;
