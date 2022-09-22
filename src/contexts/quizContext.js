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

  const { response, setResponse, loading, error, setShouldFetch, setUrl } =
    useFetch();

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
    setResponse([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClick(option) {
    setSelectedOption(option);
  }

  function handleCheck() {
    if (!selectedOption) return;

    if (!isAnswered) {
      if (selectedOption === response[index].correct_answer) {
        setScore((prev) => prev + 1);
      }
      setIsAnswered(true);
      setTimeout(() => {
        handleNext();
        setIsAnswered(false);
        setSelectedOption("");
      }, 1500);
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
        handleClick,
        handleCheck,
        setGameOver,
        compileResult,
        setCurrUser,
        setUrl,
        setShouldFetch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export function useQuizContext() {
  return useContext(QuizContext);
}
