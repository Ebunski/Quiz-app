import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function useFetch(defaultUrl = "", options = null) {
  const [url, setUrl] = useState(defaultUrl);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
    getData();
    console.log("getting data...");
    // eslint-disable-next-line
  }, [url, options]);

  return { result, loading, error, getData, setUrl };
}
