import React from "react";
import PropTypes from "prop-types";
import Question from "./Question";
import Option from "./Option";

export default function SingleNumber({
  category,
  difficulty,
  question,
  correct_answer,
  incorrect_answers,
}) {
  const answers = incorrect_answers.concat(correct_answer);
  const randomAnswers = answers.sort(() => (Math.random() > 0.5 ? 1 : -1));

  const optionsList = randomAnswers.map((x, index) => (
    <Option key={index} value={x} />
  ));

  return (
    <div style={{ marginBlock: "30px" }}>
      <Question question={question} />
      <div style={{ marginBlock: "10px" }}> {optionsList} </div>
    </div>
  );
}
