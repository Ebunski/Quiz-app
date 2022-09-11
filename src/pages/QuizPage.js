import React, { useEffect } from "react";
import SingleNumber from "../components/quiz/SingleNumber";
import { useQuizContext } from "../contexts/quizContext";
import { useNavigate } from "react-router-dom";
import useCountdown from "../hooks/useCountdown";

export default function QuizPage() {
  const { score, isAnswered, response, index, gameOver } = useQuizContext();
  const navigate = useNavigate();
  const { remainingTime } = useCountdown(
    20,
    () => console.log(remainingTime),
    score,
    isAnswered
  );

  useEffect(() => {
    if (gameOver) navigate("/congrats", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameOver]);

  // const { secondsLeft } = useTimer(10, isAnswered, index);

  const oneToTwenty = response?.map((x, pos) => (
    <SingleNumber key={pos} number={index + 1} total={response.length} {...x} />
  ));

  return (
    <div>
      {oneToTwenty[index]}
      {remainingTime}
    </div>
  );
}
