import React from "react";
import SingleNumber from "../components/SingleNumber";
import { useQuizContext } from "../contexts/quizContext";

export default function QuizPage() {
  const { response } = useQuizContext();

  const oneToTwenty = response.map((x, index) => (
    <SingleNumber key={index} {...x} />
  ));
  return <div>{oneToTwenty}</div>;
}
