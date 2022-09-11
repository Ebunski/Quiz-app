import React from "react";
// import PropTypes from "prop-types";
import Question from "./Question";
import Option from "./Option";
import { useQuizContext } from "../../contexts/quizContext";

export default function SingleNumber({
  question,
  difficulty,
  correct_answer,
  incorrect_answers,
  number,
  total,
}) {
  const { handleCheck, handleClick, isAnswered, selectedOption } =
    useQuizContext();

  function escapeHtml(str) {
    return str
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }
  const answers = incorrect_answers.concat(correct_answer);
  const randomAnswers = answers.sort();
  const optionsList = randomAnswers.map((x, index) => (
    <React.Fragment key={index}>
      <Option value={escapeHtml(x)} correctAnswer={correct_answer} />
      <br />
    </React.Fragment>
  ));
  const decodedQuestion = escapeHtml(question);

  return (
    <div style={{ marginBlock: "30px" }}>
      <p>
        Question {number} of {total}{" "}
      </p>
      <Question question={decodedQuestion} />
      {optionsList}
      <button disabled={!selectedOption} onClick={handleCheck}>
        {isAnswered ? "Continue" : "Check"}
      </button>
    </div>
  );
}
