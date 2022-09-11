import { useState, useEffect, useRef, useCallback } from "react";

export default function useTimer(duration, fn, ...deps) {
  const [remainingTime, setRemainingTime] = useState(+duration);

  return { remainingTime };
}
