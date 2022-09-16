import { useState, useEffect, useRef, useCallback } from "react";

export default function useTimer(duration, fn, ...deps) {
  const [remainingTime, setRemainingTime] = useState(+duration);

  const functionRef = useRef(fn);

  useEffect(() => {
    functionRef.current = fn;
  }, [fn]);

  useEffect(() => {
    if (remainingTime === 0) return functionRef.current();
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [setRemainingTime, remainingTime]);

  useEffect(() => {
    setRemainingTime(duration);
  }, [deps, duration]);
  return { remainingTime };
}
