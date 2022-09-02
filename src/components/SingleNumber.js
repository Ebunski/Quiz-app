import React from "react";
import Question from "./Question";
import Option from "./Option";

export default function SingleNumber({ id, question, options }) {
  return (
    <div style={{ marginBlock: "30px" }}>
      <Question question={question} />
    </div>
  );
}
