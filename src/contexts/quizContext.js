import React, { useState, useContext, createContext, useCallback } from "react";
import { categories, difficulty } from "../data";
import useTab from "../hooks/useTab";
import useFetch from "../hooks/useFetch";
import useLocalStorage from "../hooks/useLocalStorage";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [gameOver, setGameOver] = useState(false);
  const [currUser, setCurrUser] = useLocalStorage("current-user", {});
  const [score, setScore] = useLocalStorage("score", 0);
  const [highScores, setHighScores] = useLocalStorage("high-scores", []);
  const [selectedOption, setSelectedOption] = useState("");
  const [isAnswered, setIsAnswered] = useLocalStorage("is-answered", false);

  const { result, loading, error, setShouldFetch, setUrl } = useFetch();
  const response = result?.results;

  const { handleNext, index, setIndex } = useTab(response, () =>
    setGameOver(true)
  );

  /*========================states================================*/

  const reset = useCallback(() => {
    setShouldFetch(false);
    setScore(0);
    setSelectedOption("");
    setIsAnswered(false);
    setGameOver(false);
    setIndex(0);
    setCurrUser({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSelection({ user, category, difficulty }) {
    const url = `https://opentdb.com/api.php?amount=10${
      category && `&category=${category}`
    }${difficulty && `&difficulty=${difficulty}`}&type=multiple`;
    setCurrUser({
      name: user,
      category: category || "random",
      difficulty: difficulty || "random",
    });
    setUrl(url);
    setShouldFetch(true);
    window.location.pathname = "/quiz";
  }

  function handleClick(option) {
    setSelectedOption(option);
  }

  function handleCheck() {
    if (!selectedOption) return;

    if (isAnswered) {
      handleNext();
      setIsAnswered(false);
      setSelectedOption("");
    }
    if (!isAnswered) {
      if (selectedOption === response[index].correct_answer) {
        setScore((prev) => prev + 1);
      }
      setIsAnswered(true);
    }
  }

  function compileResult() {
    setHighScores((prev) =>
      [...prev, { ...currUser, score: score }]
        .sort((a, b) => b.score - a.score)
        .slice(0, 5)
    );
  }

  return (
    <QuizContext.Provider
      value={{
        loading,
        error,
        response,
        categories,
        difficulty,
        score,
        gameOver,
        selectedOption,
        isAnswered,
        index,
        currUser,
        highScores,
        reset,
        handleSelection,
        handleClick,
        handleCheck,
        setGameOver,
        compileResult,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export function useQuizContext() {
  return useContext(QuizContext);
}
