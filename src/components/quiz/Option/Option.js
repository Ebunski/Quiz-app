import React from "react";
import "./option.scss";
import { useQuizContext } from "../../../contexts/quizContext";

export default function Option({ value, correctAnswer }) {
  const { isAnswered, handleClick, selectedOption } = useQuizContext();

  const style = {
    backgroundColor:
      (value === correctAnswer && "hsl(120, 80%, 45%)") ||
      (selectedOption === value &&
        value !== correctAnswer &&
        "hsl(0, 100%, 70%) "),
  };
  return (
    <button
      style={isAnswered ? style : {}}
      className={` ${selectedOption === value ? "selected" : ""} ${
        isAnswered ? "disabled" : "enabled"
      }`}
      disabled={isAnswered}
      onClick={() => handleClick(value)}
      dangerouslySetInnerHTML={{ __html: value }}
    ></button>
  );
}
// //value - data you want to store in state on selection
// //name - state object key
// //checked - controlled input for radio and analogous to input for checkboxes (form -value, checkboxes - checked)
// //radio  - value contains the value while checked is for control.

// //select - similar to radio: option value contains the value while select value is for control.
