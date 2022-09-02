import React, { useState, useContext, createContext } from "react";
import { questionsBank } from "../data";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [data, setData] = useState(questionsBank);
  return (
    <QuizContext.Provider
      value={{
        data,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export function useQuizContext() {
  return useContext(QuizContext);
}
