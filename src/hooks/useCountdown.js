import { useState, useEffect, useRef, useCallback } from "react";

export default function useCountdown(
  duration,
  shouldRun,
  shouldPause,
  fn,
  deps
) {
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

  const clearInt = useCallback(() => {
    clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (remainingTime === 0) {
      func();
      clearInt();
      return;
    }
    if (shouldPause) clearInt();
    if (shouldRun) setInt();

    return () => clearInt();
  }, [remainingTime, setInt, func, shouldRun, clearInt, shouldPause]);

  useEffect(() => {
    if (hasRenderedInitially) {
      setRemainingTime(duration);
    }
    hasRenderedInitially.current = true;
  }, [duration, deps]);
  return { remainingTime, clearInt };
}
