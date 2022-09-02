import React from "react";
import WelcomePage from "./pages/WelcomePage";
import QuizPage from "./pages/QuizPage";
import SelectionPage from "./pages/SelectionPage";
import CongratsPage from "./pages/CongratsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
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
