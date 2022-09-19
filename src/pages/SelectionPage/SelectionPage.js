import React, { useEffect } from "react";
import "./selection-page.scss";
import { useQuizContext } from "../../contexts/quizContext";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";

export default function SelectionPage() {
  const navigate = useNavigate();
  const { categories, difficulty, handleSelection } = useQuizContext();
  const {
    shouldNavigate,
    handleSubmit,
    handleChange,
    formData,
    setShouldNavigate,
  } = useForm(handleSelection, ["user", "category", "difficulty"]);
  useEffect(() => {
    if (shouldNavigate) {
      setTimeout(() => {
        navigate("/quiz");
      }, 1000);
    }
  }, [shouldNavigate, navigate]);
  useEffect(() => {
    setShouldNavigate(false);
  }, [setShouldNavigate]);

  /*========================states================================*/
  const categoryList = categories.map((x) => (
    <option className="selection__option" key={x.id} value={x.id}>
      {x.name}
    </option>
  ));
  const difficultyList = difficulty.map((x, index) => (
    <option className="selection__option" key={index} value={x}>
      {x}
    </option>
  ));

  return (
    <section id="selection" className="selection">
      <form onSubmit={handleSubmit} className="selection__form">
        <input
          className="selection__input"
          name="user"
          type="text"
          placeholder="Enter nickname"
          value={formData.user || ""}
          onChange={handleChange}
        />
        <fieldset className="selection__group">
          <label className="selection__label" htmlFor="category">
            category:
          </label>

          <select
            id="category"
            className="selection__select"
            name="category"
            value={formData.category || ""}
            onChange={handleChange}
          >
            <option className="selection__option" value="">
              --random--
            </option>
            {categoryList}
          </select>
        </fieldset>

        <fieldset className="selection__group">
          <label className="selection__label" htmlFor="difficulty">
            difficulty:
          </label>
          <select
            id="difficulty"
            className="selection__select"
            name="difficulty"
            value={formData.difficulty || ""}
            onChange={handleChange}
          >
            <option className="selection__option" value="">
              --random--
            </option>
            {difficultyList}
          </select>
        </fieldset>

        <button
          className="selection__button"
          disabled={!formData.user}
          style={{ color: !formData.user ? "gray" : "" }}
        >
          Let's Go
        </button>
      </form>
    </section>
  );
}
