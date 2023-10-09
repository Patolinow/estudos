import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/Home.tsx";
import Root from "./pages/Root.tsx";
import EventsPage, { eventsLoader } from "./pages/Events.tsx";
import EventDetailPage, { detailAction, detailLoader } from "./pages/EventDetail.tsx";
import EditEventPage from "./pages/EditEvent.tsx";
import NewEventPage from "./pages/NewEvent.tsx";
import EventsProvider from "./contexts/EventsContext.tsx";
import EventsLayoutPage from "./pages/EventsLayout.tsx";
import ErrorPage from "./pages/Error.tsx";
import { eventAction } from "./components/EventForm.tsx";
import NewsLetterPage, { newsLetterAction } from "./pages/NewsLetter.tsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {path: "/newsletter", element: <NewsLetterPage />, action: newsLetterAction },
      {
        path: "/events",
        element: <EventsLayoutPage />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: detailLoader,
            children: [
              { index: true, element: <EventDetailPage />, action: detailAction },
              { path: "edit", element: <EditEventPage />, action: eventAction },
            ],
          },
          { path: "new", element: <NewEventPage />, action: eventAction },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <EventsProvider>
      <RouterProvider router={routes} />
    </EventsProvider>
  );
}

export default App;
