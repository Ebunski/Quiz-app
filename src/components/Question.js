import React from "react";

export default function Question({ question = "" }) {
  return (
    <div>
      <p>{question}</p>
    </div>
  );
}
