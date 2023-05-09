import { useCallback, useState } from "react";
import DataProps from "../interfaces/DataProps";

interface UseRequestProps {
  requestMethod: "GET" | "POST";
  requestAction: (data: DataProps, taskText?: string) => void;
}

const useRequest = ({
  requestMethod,
  requestAction,
  
}: UseRequestProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const apiURL = "https://max-http-requests-default-rtdb.firebaseio.com/tasks.json";
  let response: Response;

  const fetchTasks = useCallback(async (taskText?: string) => {
    setIsLoading(true);
    setError(null);
    try {
      switch (requestMethod) {
        case "GET":
          response = await fetch(apiURL);
          break;

        case "POST":
          response = await fetch(apiURL, {
            method: "POST",
            body: JSON.stringify({ text: taskText }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          break;

        default:
          throw new Error(`Invalid method, ${requestMethod} isn't a valid method`);
      }

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data: DataProps = await response.json();
      requestAction(data, taskText);
    } 
    
    catch (err) {
      if (err instanceof Error) {
        setError(err.message || "Something went wrong!");
      }
    }
    setIsLoading(false);
  }, [apiURL, requestMethod])

  return { isLoading, error, fetchTasks };
};

export default useRequest;
