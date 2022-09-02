import { useState, useEffect, useCallback } from "react";

//Hook should work just like useState("") but could also get and store data in localStorage.
//therefore it should return state and function to set state.
export default function useLocalStorage(key = "", initialValue = "") {
  const [data, setData] = useState(() => getData()); //function version so we only call in once

  //user inserts a key and initial value just like in useState.
  function getData() {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if (savedValue) return savedValue;
    if (initialValue instanceof Function) return initialValue(); //useState can accept function.
    return initialValue;
  }

  const storeData = useCallback(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  useEffect(() => {
    storeData();
  }, [storeData]);

  return [data, setData];
}
