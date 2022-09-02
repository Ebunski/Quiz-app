import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function useFetch(defaultUrl = "", options = null) {
  const [url, setUrl] = useState(defaultUrl);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let isMounted = useRef(true);
  async function getData() {
    console.log(url);
    setLoading(true);
    try {
      if (isMounted.current) {
        const { data } = await axios.get(url);
        setResult(data);
        setError(null);
      }
    } catch (error) {
      if (isMounted.current) {
        setError(error.response);
        setResult([]);
        console.log(error);
      }
    } finally {
      if (isMounted.current) {
        setLoading(false);
      }
    }
  }
  useEffect(() => {
    getData();
    return () => (isMounted.current = false);
    // eslint-disable-next-line
  }, [url, options]);

  return { result, loading, error, getData, setUrl };
}
