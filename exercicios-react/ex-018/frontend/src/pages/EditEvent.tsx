import { useRouteLoaderData } from 'react-router-dom';

import EventForm from '../components/EventForm';
import { IEventDetailProps } from '../interfaces/IEventDetailProps';

function EditEventPage() {
  const data = useRouteLoaderData('event-detail') as IEventDetailProps

  return <EventForm method="patch" event={data.event} />;
}

export default EditEventPage;
