import React, { useEffect } from "react";
import "./style.scss";
import { useQuizContext } from "../../../contexts/quizContext";

export default function Option({ value, correctAnswer }) {
  const { isAnswered, handleClick } = useQuizContext();

  // const style = {
  //   color:
  //     (value === correctAnswer && "green") ||
  //     (currentChoice === value && value !== correctAnswer && "red"),
  // };
  return (
    <button
      className="option"
      disabled={isAnswered}
      onClick={() => handleClick(value)}
    >
      {value}{" "}
    </button>
  );
}
// //value - data you want to store in state on selection
// //name - state object key
// //checked - controlled input for radio and analogous to input for checkboxes (form -value, checkboxes - checked)
// //radio  - value contains the value while checked is for control.

// //select - similar to radio: option value contains the value while select value is for control.
