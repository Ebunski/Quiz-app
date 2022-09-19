import React from "react";
import { useQuizContext } from "../../contexts/quizContext";
import "./congrats-page.scss";
import Confetti from "react-confetti";
import useWindowResize from "../../hooks/useWindowSize";
import { Link } from "react-router-dom";

export default function CongratsPage() {
  const { score, user, remainingTime } = useQuizContext();
  const { height, width } = useWindowResize();
  function giveComment() {
    if (score < 3) return `Don't be sad ${user}, give it another try.`;
    if (score < 6)
      return `Wow ${user} you did better than i thought! Think you can do better?`;
    if (score < 9) return `You did great ${user}! Too easy uh?, again`;
    if (score <= 10)
      return `You are a genius ${user}! ${(<i>or lucky perhaps</i>)}`;
  }
  return (
    <div className="congrats__container">
      <Confetti width={width} height={height} />
      <div className="congrats__card">
        {remainingTime === 0 && <p>Oops,Time's Up!</p>}
        <h2 className="congrats__result">You scored {score * 10}%</h2>
        <p className="congrats__text">{giveComment()}</p>
        <Link to="/">
          <button className="congrats__button">Play again</button>
        </Link>
      </div>
    </div>
  );
}
