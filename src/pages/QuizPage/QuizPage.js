import React, { useEffect } from "react";
import "./quiz-page.scss";
import SingleNumber from "../../components/quiz/SingleNumber/SingleNumber";
import Error from "../../components/Error";
import { useQuizContext } from "../../contexts/quizContext";
import { useNavigate } from "react-router-dom";
import useCountdown from "../../hooks/useCountdown";

export default function QuizPage() {
  const { response, index, gameOver, error, compileResult, setGameOver } =
    useQuizContext();
  const { remainingTime } = useCountdown(
    30,
    response?.length > 0,
    () => setGameOver(true),
    index
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (gameOver) {
      navigate("/congrats", { replace: true });
      compileResult();
    }
  }, [gameOver, navigate, compileResult]);

  /*-------states-------------------------------*/

  const oneToTwenty = response?.map((x, pos) => (
    <SingleNumber
      key={pos}
      number={index + 1}
      total={response?.length}
      {...x}
    />
  ));

  if (error)
    return (
      <main className="quiz__container">
        <Error />
      </main>
    );
  return (
    <main className="quiz__container quiz__bg">
      {oneToTwenty?.length > 0 && oneToTwenty[index]}
      <div className="quiz__timer">
        <span className="quiz__timer-count">{remainingTime}</span>
      </div>
    </main>
  );
}
