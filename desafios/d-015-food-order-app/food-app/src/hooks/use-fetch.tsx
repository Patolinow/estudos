import { useEffect, useState } from "react";
import axios, {AxiosResponse} from "axios";

interface RequestedData {
  [key: string]: {
    description: string;
    name: string;
    price: number;
  };
}

interface useFetchProps {
  url: string;
  requestMethod: "GET" | "POST";
  requestMessage?: unknown;
}

export default function useFetch({ url, requestMethod, requestMessage }: useFetchProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [requestedData, setRequestedData] = useState<RequestedData | null>(null);
  const [isSucessRequest, setIsSucessRequest] = useState(false)

  useEffect(() => {
    (async function () {
      try {
        let dataRequest: RequestedData;
        let axiosResponse: AxiosResponse<any, any>;
        setIsLoading(true);

        switch (requestMethod) {
          case "GET":
            axiosResponse = await axios.get(url)
            dataRequest = await axiosResponse.data;
            break;

          case "POST":
            axiosResponse = await axios.post(url, JSON.stringify(requestMessage))
            dataRequest = await axiosResponse.data;
            break;

          default:
            throw new Error(`${requestMethod} isn't a supported request type`);
        }
        if (axiosResponse.status < 400) {
          setIsSucessRequest(true)
        }

        setRequestedData(dataRequest);
      } 
      
      catch (error) {
        if (axios.isAxiosError(error)) {
          setErrorMessage(error.message);
        } else {
          throw new Error("not axios error (fix later with error boundary)");
        }
      } 
      
      finally {
        setIsLoading(false);
          
      }
    })();
  }, [url]);

  return { isLoading, errorMessage, requestedData, isSucessRequest };
}
