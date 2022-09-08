import React, { useState } from "react";
import SingleNumber from "../components/SingleNumber";
import Error from "../components/Error";
import { useQuizContext } from "../contexts/quizContext";
import useTab from "../hooks/useTab";

export default function QuizPage() {
  const {
    response = [],
    handleSubmit,
    formData,
    handleRestart,
  } = useQuizContext();
  const { handlePrev, handleNext, index } = useTab(response);

  const oneToTwenty = response.map((x, pos) => (
    <SingleNumber
      name={`q${pos + 1}`}
      currentChoice={formData[`q${pos + 1}`]}
      key={pos}
      number={index + 1}
      {...x}
    />
  ));
  return (
    <>
      <form onSubmit={handleSubmit}>
        {oneToTwenty[index]}
        <button type="submit">Submit</button>
      </form>
      <div>
        <button onClick={handleRestart}>Restart</button>
        <button onClick={handlePrev}>previous</button>
        <button onClick={handleNext}>next</button>
      </div>
    </>
  );
}
