import { Methods } from "../interfaces/Methods";
import { useCallback, useState } from "react";
import axios, { AxiosResponse, isAxiosError } from "axios";
import IEventProps from "../interfaces/IEventsProps";

interface IRequestProps {
  url: string;
  method: Methods;
  dataToSend?: unknown;
}

interface IResponse {
  isLoading: boolean;
  events: null | IEventProps[];
  errorMessage: null | string;
}

const useRequest = () => {
  const [response, setResponse] = useState<IResponse>({
    isLoading: false,
    events: null,
    errorMessage: null,
  });

  const sendRequest = useCallback(async ( url:string, method: Methods, dataToSend?: unknown ) => {
    try {
      setResponse((prevResponse) => {return {...prevResponse, isLoading: true} });
      let axiosResponse: AxiosResponse<any, any>;

      switch (method) {
        case "GET":
          axiosResponse = await axios.get(url);
          break;

        case "POST":
          axiosResponse = await axios.post(url, dataToSend);
          break;

        case "PATCH":
          axiosResponse = await axios.patch(url, dataToSend);
          break;

        case "DELETE":
          axiosResponse = await axios.delete(url);
          break;

        default:
          throw new Error(`${method} isn't a valid method`);
      }

      const axiosData: {events: IEventProps[]} = await axiosResponse.data
      const events = axiosData.events

      setResponse({
        errorMessage: null,
        events,
        isLoading: false,
      });
    }
    
    catch (error) {
      if (isAxiosError(error)) {
        setResponse({ isLoading: false, errorMessage: error.message, events: null });
      }
      
      else {
        throw new Error(`${error}`);
      }
    }
  }, []);

  return { ...response, sendRequest };
};
export default useRequest;
