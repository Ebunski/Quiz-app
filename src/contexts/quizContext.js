import React, { useEffect, useRef, useContext, createContext } from "react";
import { categories, difficulty } from "../data";
import useFetch from "../hooks/useFetch";
import useLocalStorage from "../hooks/useLocalStorage";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  let url = "https://opentdb.com/api.php?amount=10&type=multiple";
  const { result, loading, error, setUrl } = useFetch(url);
  const [data, setData] = useLocalStorage("questions-bank", result);
  const response = data.results;
  const code = data.response_code;

  function handleSelection({ category, difficulty }) {
    url = `https://opentdb.com/api.php?amount=20${
      category && `&category=${category}`
    }${difficulty && `&difficulty=${difficulty}`}&type=multiple`;
    setUrl(url);
  }
  useEffect(() => {
    console.log("syncing with local storage...");
    setData(result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  return (
    <QuizContext.Provider
      value={{
        categories,
        difficulty,
        response,
        loading,
        error,
        handleSelection,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export function useQuizContext() {
  return useContext(QuizContext);
}
