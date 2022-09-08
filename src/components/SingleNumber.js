import React, { useState } from "react";
import PropTypes from "prop-types";
import Question from "./Question";
import Option from "./Option";

export default function SingleNumber({
  category,
  difficulty,
  question,
  correct_answer,
  incorrect_answers,
  number,
  ...form
}) {
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
      <Option
        value={escapeHtml(x)}
        name={form.name}
        currentChoice={form.currentChoice}
        correctAnswer={correct_answer}
      />
      <br />
    </React.Fragment>
  ));

  const decodedQuestion = escapeHtml(question);

  return (
    <div style={{ marginBlock: "30px" }}>
      <p>Question {number} of 10 </p>
      <Question question={decodedQuestion} />
      {optionsList}
      <button>Check</button>
    </div>
  );
}
