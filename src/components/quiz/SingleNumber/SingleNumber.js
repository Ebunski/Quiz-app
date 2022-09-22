import React from "react";
import "./single-number.scss";
// import PropTypes from "prop-types";
import ProgressBar from "./ProgressBar";
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

  const answers = incorrect_answers.concat(correct_answer);
  const randomAnswers = answers.sort();
  const optionsList = randomAnswers.map((x, index) => (
    <React.Fragment key={index}>
      <Option value={x} correctAnswer={correct_answer} />
      <br />
    </React.Fragment>
  ));
  const progress = (number / total) * 100 + "%";

  /*
  =====
  LAYOUT
  =====
  */
  return (
    <article className="card">
      <div className="card__wrapper">
        <p className={"card__indicator"}>
          Question {number} of {total}
        </p>
        <ProgressBar width={progress} />
        <div className="card__questionBox">
          <h4
            className="card__question"
            dangerouslySetInnerHTML={{ __html: question }}
          />
        </div>

        <ul className="card__answerBox">{optionsList}</ul>
        <button
          className={`card__button--${selectedOption ? "active" : "disabled"}`}
          disabled={!selectedOption}
          onClick={handleCheck}
        >
          {isAnswered ? "Checking..." : "Check"}
        </button>
      </div>
    </article>
  );
}
