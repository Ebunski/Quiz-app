import { useState, useRef, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

export default function useLocalStorage(key = "", initialValue = "") {
  const [data, setData] = useState(() => getData());

  function getData() {
    const savedValue = localStorage.getItem(key);
    if (savedValue) return JSON.parse(savedValue);
    if (initialValue instanceof Function) return initialValue();
    return initialValue;
  }

  const storeData = useCallback(() => {
    localStorage.setItem(key, JSON.stringify(data));
    console.log("setting local...");
  }, [key, data]);

  useEffect(() => {
    storeData();
  }, [storeData]);

  return [data, setData];
}

