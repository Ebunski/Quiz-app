import React, { useEffect } from "react";
import { useQuizContext } from "../contexts/quizContext";
import { Navigate } from "react-router-dom";

function Authentication({ children }) {
  const { currUser } = useQuizContext();

  return Object.keys(currUser).length === 0 ? <Navigate to="/" /> : children;
}

export default React.memo(Authentication);
