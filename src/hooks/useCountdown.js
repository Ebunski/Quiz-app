import { useState, useEffect, useRef, useCallback } from "react";

export default function useTimer(duration, shouldRun, fn, deps) {
  const [remainingTime, setRemainingTime] = useState(+duration);

  const func = useCallback(() => {
    return fn();
  }, [fn]);

  const intervalRef = useRef();
  const hasRenderedInitially = useRef(false);

  const setInt = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setRemainingTime((prev) => prev - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    console.log(remainingTime);
  }, [remainingTime]);

  useEffect(() => {
    if (remainingTime === 0) {
      func();
      clearInterval(intervalRef.current);
      return;
    }
    if (shouldRun) setInt();

    return () => clearInterval(intervalRef.current);
  }, [remainingTime, setInt, func, shouldRun]);

  useEffect(() => {
    if (hasRenderedInitially) {
      setRemainingTime(duration);
    }
    hasRenderedInitially.current = true;
  }, [duration, deps]);
  return { remainingTime };
}
