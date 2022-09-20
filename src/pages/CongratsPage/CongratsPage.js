import React from "react";
import { useQuizContext } from "../../contexts/quizContext";
import "./congrats-page.scss";
import Confetti from "react-confetti";
import useWindowResize from "../../hooks/useWindowSize";
import { Link } from "react-router-dom";

export default function CongratsPage() {
  const { score, currUser, highScores, categories } = useQuizContext();
  const { height, width } = useWindowResize();
  function giveComment() {
    if (score < 3)
      return `Don't be sad ${currUser?.name}, give it another try.`;
    if (score < 6)
      return `Wow ${currUser?.name} you did better than i thought! Think you can do better?`;
    if (score < 9)
      return `You did great ${currUser?.name}! Too easy uh?, again`;
    if (score <= 10)
      return `You are a genius ${currUser?.name}! ${(<i>or lucky perhaps</i>)}`;
  }

  console.log(categories.find((cat) => cat.id === 13).name);
  const highScoreList = highScores.map((x, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{x.name}</td>
      <td>
        {x.category === "random"
          ? x.category
          : categories.find((cat) => cat.id === 13).name}
      </td>
      <td>{x.difficulty}</td>
      <td>{x.score * 10}%</td>
    </tr>
  ));
  return (
    <div className="congrats__container">
      <Confetti width={width} height={height} />
      <div className="congrats__card">
        <h2 className="congrats__result">
          {score > (highScores.length > 0 && highScores[0].score)
            ? `New High Score! ${score * 10}%`
            : `You scored ${score * 10}%`}
        </h2>
        <p className="congrats__text">{giveComment()}</p>
        <Link to="/">
          <button className="congrats__button">Play again</button>
        </Link>
      </div>

      {highScores.length > 0 && (
        <table className="table">
          <thead className="table__heading">
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Category</th>
              <th>Difficulty</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>{highScoreList}</tbody>
        </table>
      )}
    </div>
  );
}
