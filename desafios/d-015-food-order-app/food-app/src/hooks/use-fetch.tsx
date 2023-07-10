import { useCallback, useState } from "react";
import axios, { AxiosResponse } from "axios";
import RequestedData from "../interfaces/RequestedData";

interface UseFetchProps {
  url: string;
  requestMethod: "GET" | "POST";
  requestMessage?: object;
}

interface FetchState {
  isLoading: boolean;
  errorMessage: string | null;
  requestedData: RequestedData | null;
  isSuccessRequest: boolean;
}

export default function useFetch() {
  const [response, setResponse] = useState<FetchState>({
    isLoading: false,
    errorMessage: null,
    requestedData: null,
    isSuccessRequest: false,
  });

  const sendRequest = useCallback(async ({ url, requestMethod, requestMessage }: UseFetchProps) => {
    setResponse((prevState) => ({
      ...prevState,
      isLoading: true,
    }));

    try {
      let axiosResponse: AxiosResponse<any, any>;

      switch (requestMethod) {
        case "GET":
          axiosResponse = await axios.get(url);
          break;

        case "POST":
          axiosResponse = await axios.post(url, {googleAuth:  import.meta.env.VITE_AUTH_TOKEN,...requestMessage});
          console.log({googleAuth: "asDuckWish" ,...requestMessage})
          break;

        default:
          throw new Error(`${requestMethod} isn't a supported request type`);
      }

      setResponse({
        isLoading: false,
        errorMessage: null,
        requestedData: axiosResponse.data,
        isSuccessRequest: true,
      });
    }
    
    catch (error) {
      const err = error as Error;

      if (axios.isAxiosError(error)) {
        setResponse((prevState) => ({
          ...prevState,
          isLoading: false,
          errorMessage: err.message,
        }));
      } else {
        throw new Error(err.message);
      }
    }
  }, []);

  return { ...response, sendRequest };
}
