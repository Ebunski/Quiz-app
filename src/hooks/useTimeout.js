import { useCallback, useEffect, useRef } from "react";

export default function useTimeOut(callback, delay) {
  const callbackRef = useRef(callback);
  //since we are accepting a function from a component that could re-render.
  //so we store mutable value in useRef so we can use in useEffect

  const timeoutRef = useRef();

  //anytime callback changes useEffect sets the ref
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(() => timeoutRef.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
}
