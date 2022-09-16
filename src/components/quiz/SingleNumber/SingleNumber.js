import React from "react";
import "./style.scss";
// import PropTypes from "prop-types";

import Option from "../Option/Option";
import { useQuizContext } from "../../../contexts/quizContext";

export default function SingleNumber({
  question,
  difficulty,
  correct_answer,
  incorrect_answers,
  number,
  total,
}) {
  const { handleCheck, isAnswered, selectedOption } = useQuizContext();

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

  return (
    <article className="card">
      <div className="card__wrapper">
        <p className={"card__indicator"}>
          Question {number} of {total}
        </p>
        <div className="card__questionBox">
          <h4
            className="card__question"
            dangerouslySetInnerHTML={{ __html: question }}
          />
        </div>

        <ul className="card__answerBox">{optionsList}</ul>
        <button
          className="card__button"
          disabled={!selectedOption}
          onClick={handleCheck}
        >
          {isAnswered ? "Continue" : "Check"}
        </button>
      </div>
    </article>
  );
}
