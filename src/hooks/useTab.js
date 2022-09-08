import { useState } from "react";

export default function useTab(arr) {
  const [index, setIndex] = useState(0);
  function check(number) {
    //for when it reaches end of array
    if (number > arr.length - 1) return 0;
    if (number < 0) return arr.length - 1;
    return number;
  }

  function handlePrev() {
    setIndex((prev) => check(prev - 1));
  }

  function handleNext() {
    setIndex((prev) => check(prev + 1));
  }

  return { handlePrev, handleNext, index };
}
