import React from "react";
import Loading from "./components/Loading";
import Authentication from "./components/Authentication";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import QuizPage from "./pages/QuizPage/QuizPage";
import CongratsPage from "./pages/CongratsPage/CongratsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useQuizContext } from "./contexts/quizContext";

export default function App() {
  const { loading } = useQuizContext();
  if (loading) return <Loading />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />

        <Route
          path="quiz"
          element={
            <Authentication>
              <QuizPage />
            </Authentication>
          }
        />
        <Route
          path="congrats"
          element={
            <Authentication>
              <CongratsPage />
            </Authentication>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
