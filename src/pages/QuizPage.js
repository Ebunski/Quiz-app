import React from "react";
import SingleNumber from "../components/SingleNumber";
import Error from "../components/Error";
import { useQuizContext } from "../contexts/quizContext";

export default function QuizPage() {
  const { response, handleSubmit, formData } = useQuizContext();

  if (!response) {
    return <Error type="network" />;
  }

  const oneToTwenty = response.map((x, index) => (
    <SingleNumber
      name={`q${index + 1}`}
      currentChoice={formData[`q${index + 1}`]}
      key={index}
      {...x}
    />
  ));
  return (
    <form onSubmit={handleSubmit}>
      {oneToTwenty}
      <button>Submit</button>{" "}
    </form>
  );
}
