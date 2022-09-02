import React, { useState, useContext, createContext } from "react";
import { categories, difficulty } from "../data";
import useFetch from "../hooks/useFetch";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  let url = "https://opentdb.com/api.php?amount=10&type=multiple";
  const { result, loading, error, getData, setUrl } = useFetch(url);

  console.log(result);
  function handleSelection({ category, difficulty }) {
    url = `https://opentdb.com/api.php?amount=20${
      category && `&category=${category}`
    }${difficulty && `&difficulty=${difficulty}`}&type=multiple`;
    setUrl(url);
  }

  return (
    <QuizContext.Provider
      value={{
        categories,
        difficulty,
        result,
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
