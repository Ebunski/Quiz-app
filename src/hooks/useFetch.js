import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url = "", options = null) {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let isMounted = true;
  async function getData() {
    setLoading(true);
    try {
      if (isMounted) {
        const { data } = await axios.get(url);
        setResult(data);
        setError(null);
      }
    } catch (error) {
      if (isMounted) {
        setError(error.message);
        setResult([]);
        console.log(error);
      }
    } finally {
      if (isMounted) {
        setLoading(false);
      }
    }
  }
  useEffect(() => {
    getData();
    return () => (isMounted = false);
  }, [url, options]);

  return { result, loading, error, getData };
}
