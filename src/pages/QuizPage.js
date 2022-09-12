import React, { useEffect } from "react";
import SingleNumber from "../components/quiz/SingleNumber";
import Error from "../components/Error";
import { useQuizContext } from "../contexts/quizContext";
import { useNavigate } from "react-router-dom";
import useCountdown from "../hooks/useCountdown";

export default function QuizPage() {
  const { score, isAnswered, response, index, gameOver, error } =
    useQuizContext();
  const navigate = useNavigate();
  const { remainingTime } = useCountdown(
    20,
    () => console.log(remainingTime),
    score,
    isAnswered
  );

  useEffect(() => {
    if (gameOver) navigate("/congrats", { replace: true });
  }, [gameOver,navigate]);

  // const { secondsLeft } = useTimer(10, isAnswered, index);

  const oneToTwenty = response?.map((x, pos) => (
    <SingleNumber key={pos} number={index + 1} total={response.length} {...x} />
  ));
  if (error) return <Error />;
  return (
    <div>
      {oneToTwenty?.length > 0 && oneToTwenty[index]}
      {remainingTime}
    </div>
  );
}
