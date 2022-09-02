import React from "react";
import SingleNumber from "../components/SingleNumber";
import { useQuizContext } from "../contexts/quizContext";

export default function QuizPage() {
  const { data } = useQuizContext();
  // const questionsList = data.map((x) => <SingleNumber key={x.id} {...x} />);
  // return <div>{questionsList}</div>;
}
