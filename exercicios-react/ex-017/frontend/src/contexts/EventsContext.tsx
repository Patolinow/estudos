import { createContext, useEffect, PropsWithChildren } from "react";
import useRequest from "../hooks/useRequest";
import IEventProps from "../interfaces/IEventsProps";

interface IEventsContext {
  events: IEventProps[] | null;
  isLoading: boolean;
  errorMessage: string | null;
}

export const EventsContext = createContext({
  events: [],
  isLoading: false,
  errorMessage: null,
} as IEventsContext);

const EventsProvider = (props: PropsWithChildren) => {
  const { events, errorMessage, isLoading, sendRequest } = useRequest();

  useEffect(() => {
    const url = "http://localhost:8080/events";
    sendRequest({ url, method: "GET" });
  }, [sendRequest]);

  return (
    <EventsContext.Provider value={{ events, isLoading, errorMessage }}>
      {props.children}
    </EventsContext.Provider>
  );
};

export default EventsProvider;
