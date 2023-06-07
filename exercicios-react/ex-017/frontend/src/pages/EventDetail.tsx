import { useContext } from "react";
import { useParams } from "react-router-dom";
import { EventsContext } from "../contexts/EventsContext";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const params: { eventId?: string } = useParams();
  const items = useContext(EventsContext).events;
  let event: JSX.Element | undefined;

  if (items) {
    const actualEventIndex = items.findIndex((item) => item.id === params.eventId);
    if (actualEventIndex === -1) throw new Error("Event doesn't exist");
    

    const actualEvent = items[actualEventIndex];
    {
      event = (
        <EventItem
          key={actualEvent.id}
          date={actualEvent.date}
          description={actualEvent.description}
          id={actualEvent.id}
          image={actualEvent.image}
          title={actualEvent.title}
        />
      );
    }
  }

  return (
    <div>
      <h1>Event Detail</h1>
      {event || <p>This Event doesn't exist</p>}
    </div>
  );
};

export default EventDetailPage;
