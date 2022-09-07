import React, { useEffect, useState, useContext, createContext } from "react";
import { categories, difficulty } from "../data";
import useFetch from "../hooks/useFetch";
import useLocalStorage from "../hooks/useLocalStorage";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const { result, loading, error, setUrl } = useFetch();
  const [data, setData] = useLocalStorage("questions-bank", result);
  const [showAnswer, setShowAnswer] = useState(false);
  const [formData, setFormData] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    q10: "",
  });

  useEffect(() => {
    if (result !== {}) {
      console.log("syncing with local storage...");
      setData(result);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);
  /*========================states================================*/
  const response = data.results; ///error
  const code = data.response_code;
  const correctAnswers = response && response.map((x) => x.correct_answer);

  function handleSelection({ category, difficulty }) {
    const url = `https://opentdb.com/api.php?amount=10${
      category && `&category=${category}`
    }${difficulty && `&difficulty=${difficulty}`}&type=multiple`;
    setUrl(url);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function evaluateAnswers() {
    const mark = correctAnswers.map(
      (x, index) => x === formData[`q${index + 1}`]
    );
    const score = mark.filter((x) => x === true).length;
    console.log(score, mark);
    setShowAnswer(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    console.log(correctAnswers);
    evaluateAnswers();
  }

  return (
    <QuizContext.Provider
      value={{
        categories,
        difficulty,
        response,
        loading,
        error,
        formData,
        showAnswer,
        handleSelection,
        handleChange,
        handleSubmit,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export function useQuizContext() {
  return useContext(QuizContext);
}
