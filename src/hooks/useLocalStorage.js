import { useState, useEffect, useCallback } from "react";

export default function useLocalStorage(key = "", initialValue = "") {
  const [data, setData] = useState(() => getData());

  function getData() {
    const savedValue = localStorage.getItem(key);
    if (savedValue !== (undefined || null)) return JSON.parse(savedValue);
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
