import { useState, useEffect, useRef } from "react";
import useLocalStorage from "./useLocalStorage";
import axios from "axios";

export default function useFetch() {
  const [shouldFetch, setShouldFetch] = useState(false);
  const [url, setUrl] = useState("");
  const [response, setResponse] = useLocalStorage("questions-bank", []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const runEffect = useRef(false);

  async function getData() {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setResponse(response.data.results);
      setError(null);
    } catch (error) {
      setError(error.response);
      setResponse([]);
      console.log(error);
    } finally {
      setLoading(false);
      setShouldFetch(false);
    }
  }

  useEffect(() => {
    if (runEffect.current && url && shouldFetch) {
      getData();
      console.log("getting data...");
    }

    runEffect.current = true;
    // eslint-disable-next-line
  }, [url, shouldFetch]);

  return { response, setResponse, loading, error, setUrl, setShouldFetch };
}
