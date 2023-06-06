import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/Home.tsx";
import Root from "./pages/Root.tsx";
import EventsPage from "./pages/Events.tsx";
import EventDetailPage from "./pages/EventDetail.tsx";
import EditEventPage from "./pages/EditEvent.tsx";
import NewEventPage from "./pages/NewEvent.tsx";
import EventsProvider from "./contexts/EventsContext.tsx";
import EventsLayoutPage from "./pages/EventsLayout.tsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/events",
        element: <EventsLayoutPage />,
        children: [
          {index: true, element: <EventsPage />},
          { path: ":eventId", element: <EventDetailPage /> },
          { path: "new", element: <NewEventPage /> },
          { path: ":eventId/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <EventsProvider>
      <RouterProvider router={routes} />
    </EventsProvider>
  </React.StrictMode>
);
