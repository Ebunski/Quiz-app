import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./style.css";
import { QuizProvider } from "./contexts/quizContext";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </StrictMode>
);
