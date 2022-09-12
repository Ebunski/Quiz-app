import React from "react";
import Loading from "./components/Loading";

import WelcomePage from "./pages/WelcomePage/WelcomePage";
import QuizPage from "./pages/QuizPage";
import CongratsPage from "./pages/CongratsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useQuizContext } from "./contexts/quizContext";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  const { loading, error } = useQuizContext();
  if (loading) return <Loading />;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <WelcomePage />
            </ErrorBoundary>
          }
        />

        <Route
          path="quiz"
          element={
            <ErrorBoundary>
              {" "}
              <QuizPage />
            </ErrorBoundary>
          }
        />
        <Route
          path="congrats"
          element={
            <ErrorBoundary>
              <CongratsPage />{" "}
            </ErrorBoundary>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
