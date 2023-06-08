import { useRouteLoaderData } from "react-router-dom"
import EventForm from "../components/EventForm"
import IEventProps from "../interfaces/IEventsProps"

const EditEventPage = () => {

    const data = useRouteLoaderData('event-detail') as IEventProps
  return (  <EventForm event={data} /> )
}

export default EditEventPage