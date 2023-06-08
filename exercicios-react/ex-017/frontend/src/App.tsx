import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/Home.tsx";
import Root from "./pages/Root.tsx";
import EventsPage, { eventsLoader } from "./pages/Events.tsx";
import EventDetailPage, { detailLoader } from "./pages/EventDetail.tsx";
import EditEventPage from "./pages/EditEvent.tsx";
import NewEventPage from "./pages/NewEvent.tsx";
import EventsProvider from "./contexts/EventsContext.tsx";
import EventsLayoutPage from "./pages/EventsLayout.tsx";
import ErrorPage from "./pages/Error.tsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
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
              { index: true, element: <EventDetailPage /> },
              { path: "edit", element: <EditEventPage /> },
            ],
          },
          { path: "new", element: <NewEventPage /> },
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
