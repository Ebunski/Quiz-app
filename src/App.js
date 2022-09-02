import React from "react";
import Loading from "./components/Loading";
import WelcomePage from "./pages/WelcomePage";
import QuizPage from "./pages/QuizPage";
import SelectionPage from "./pages/SelectionPage";
import CongratsPage from "./pages/CongratsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useQuizContext } from "./contexts/quizContext";

export default function App() {
  const { loading } = useQuizContext();
  if (loading) return <Loading />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="selection" element={<SelectionPage />} />
        <Route path="quiz" element={<QuizPage />} />
        <Route path="congrats" element={<CongratsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
