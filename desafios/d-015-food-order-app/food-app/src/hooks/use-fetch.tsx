import { useEffect, useState } from "react";
import axios from "axios";

interface RequestedData {
  [key: string]: {
    description: string;
    name: string;
    price: number;
  };
}

interface useFetchProps {
  url: string;
  requestMethod: "GET" | "POST_FORM";
  requestMessage?: string;
}

export default function useFetch({ url, requestMethod, requestMessage }: useFetchProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [requestedData, setRequestedData] = useState<RequestedData | null>(null);

  useEffect(() => {
    (async function () {
      try {
        let dataRequest: RequestedData;
        setIsLoading(true);

        switch (requestMethod) {
          case "GET":
            dataRequest = await (await axios.get(url)).data;

            break;

          case "POST_FORM":
            dataRequest = await (await axios.postForm(url, requestMessage)).data;
            break;
          default:
            throw new Error(`${requestMethod} isn't a supported request type`);
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

  return { isLoading, errorMessage, requestedData };
}