import { useContext } from "react";
import { EventsContext } from "../contexts/EventsContext";
import { Link } from "react-router-dom";

const EventsPage = () => {
  const { errorMessage, events, isLoading } = useContext(EventsContext);
  const eventsList = (
    <ul>
      {events?.map((event) => (
        <li key={event.id}><Link to={event.id}>{event.title}</Link></li>
      ))}
    </ul>
  );
  const loading = isLoading ? <p>loading...</p> : undefined;
  const error = errorMessage ? <p>{errorMessage}</p> : undefined;

  return (
    <>
      <h1>Events</h1>
      {loading || error || eventsList}
    </>
  );
};

export default EventsPage;
