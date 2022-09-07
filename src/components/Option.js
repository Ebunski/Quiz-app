import React from "react";
import { useQuizContext } from "../contexts/quizContext";

export default function Option({ value, name, currentChoice, correctAnswer }) {
  const { handleChange, showAnswer } = useQuizContext();

  const style = {
    color:
      (value === correctAnswer && "green") ||
      (currentChoice === value && value !== correctAnswer && "red"),
  };
  return (
    <label>
      <input
        type="radio"
        name={name}
        onChange={handleChange}
        value={value}
        checked={currentChoice === value}
        disabled={showAnswer}
      />
      <span style={showAnswer ? style : {}}>{value}</span>
    </label>
  );
}
//value - data you want to store in state on selection
//name - state object key
//checked - controlled input for radio and analogous to input for checkboxes (form -value, checkboxes - checked)
//radio  - value contains the value while checked is for control.

//select - similar to radio: option value contains the value while select value is for control.
