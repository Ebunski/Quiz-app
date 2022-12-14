import React from "react";
import "./selection-page.scss";
import { useQuizContext } from "../../contexts/quizContext";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";

export default function SelectionPage() {
  const { categories, difficulty, setCurrUser, setUrl, setShouldFetch } =
    useQuizContext();
  const { handleSubmit, handleChange, formData, blurred, setBlurred } = useForm(
    handleSelection,
    ["user", "category", "difficulty"]
  );
  const navigate = useNavigate();

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

  function handleSelection({ user, category, difficulty }) {
    const url = `https://opentdb.com/api.php?amount=10${
      category && `&category=${category}`
    }${difficulty && `&difficulty=${difficulty}`}&type=multiple`;
    setCurrUser({
      name: user,
      category: category || "random",
      difficulty: difficulty || "random",
    });
    setUrl(url);
    setShouldFetch(true);
    setTimeout(() => {
      navigate("/quiz");
    }, 500);
  }

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
          focused={blurred.toString()}
          onBlur={() => setBlurred(true)}
          required
        />
        <span>This field is required! </span>
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

        <button className="selection__button" disabled={!formData.user}>
          Let's Go
        </button>
      </form>
    </section>
  );
}
