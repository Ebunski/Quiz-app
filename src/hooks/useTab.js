import useLocalStorage from "./useLocalStorage";

export default function useTab(arr, endFn) {
  const [index, setIndex] = useLocalStorage("index", 0);

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
    if (endFn && index + 1 > arr.length - 1) return endFn();
    setIndex((prev) => check(prev + 1));
  }

  return { handlePrev, handleNext, index, setIndex };
}
