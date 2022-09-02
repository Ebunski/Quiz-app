import React, { useState, useContext, createContext } from "react";
import axios from "axios";
import { categories, difficulty } from "../data";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  function getQuestions({ category, difficulty }) {
    const url = `https://opentdb.com/api.php?amount=20&category=${category}&difficulty=${difficulty}&type=multiple`;
  }

  return (
    <QuizContext.Provider
      value={{
        categories,
        difficulty,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export function useQuizContext() {
  return useContext(QuizContext);
}
