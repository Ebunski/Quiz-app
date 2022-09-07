import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function useFetch() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState([]);
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
    }
  }
  useEffect(() => {
    if (runEffect.current) {
      getData();
      console.log("getting data...");
    }

    runEffect.current = true;
    // eslint-disable-next-line
  }, [url]);

  return { result, loading, error, getData, setUrl };
}
