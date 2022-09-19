import React, { useState, useContext, createContext } from "react";
import { categories, difficulty } from "../data";
import useTab from "../hooks/useTab";
import useFetch from "../hooks/useFetch";
import useCountdown from "../hooks/useCountdown";
import useLocalStorage from "../hooks/useLocalStorage";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [gameOver, setGameOver] = useState(false);
  const [user, setUser] = useState("");
  const [score, setScore] = useLocalStorage("score", 0);
  const [highScores, setHighScores] = useLocalStorage("high-scores", []);
  const [selectedOption, setSelectedOption] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);

  const { result, loading, error, setShouldFetch, setUrl } = useFetch();
  const response = result?.results;

  const { handleNext, index, setIndex } = useTab(response, () =>
    setGameOver(true)
  );
  const { remainingTime } = useCountdown(
    20,
    response?.length > 0,
    () => setGameOver(true),
    index
  );

  /*========================states================================*/

  function handleSelection({ user, category, difficulty }) {
    const url = `https://opentdb.com/api.php?amount=10${
      category && `&category=${category}`
    }${difficulty && `&difficulty=${difficulty}`}&type=multiple`;
    setUrl(url);
    setUser(user);
    setShouldFetch(true);
    setScore(0);
    setSelectedOption("");
    setIsAnswered(false);
    setGameOver(false);
    setIndex(0);
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
        user,
        remainingTime,
        handleSelection,
        handleClick,
        handleCheck,
        setGameOver,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export function useQuizContext() {
  return useContext(QuizContext);
}
