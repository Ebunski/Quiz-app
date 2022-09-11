import React from "react";
import { useQuizContext } from "../contexts/quizContext";

export default function CongratsPage() {
  const { score } = useQuizContext();
  return (
    <div>
      <h2>You scored {score}</h2>
    </div>
  );
}
