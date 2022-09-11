import { useState, useEffect, useRef } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import axios from "axios";

export default function useFetch() {
  const [shouldFetch, setShouldFetch] = useState(false);
  const [url, setUrl] = useState("");
  const [result, setResult] = useLocalStorage("questions-bank", []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const runEffect = useRef(false);

  async function getData() {
    try {
      setLoading(true);
      const { data } = await axios.get(url);
      setResult(data);
      setError(null);
    } catch (error) {
      setError(error.response);
      setResult([]);
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

  return { result, setResult, loading, error, setUrl, setShouldFetch };
}
