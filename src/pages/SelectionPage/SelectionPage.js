import React, { useEffect } from "react";
import "./style.scss";
import { useQuizContext } from "../../contexts/quizContext";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";

export default function SelectionPage() {
  const navigate = useNavigate();
  const { categories, difficulty, handleSelection, remainingTime } =
    useQuizContext();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*========================states================================*/
  const categoryList = categories.map((x) => (
    <option key={x.id} value={x.id}>
      {x.name}
    </option>
  ));
  const difficultyList = difficulty.map((x, index) => (
    <option key={index} value={x}>
      {x}
    </option>
  ));

  return (
    <section id="selection" className="selection">
      <form onSubmit={handleSubmit}>
        <input
          name="category"
          type="text"
          placeholder="Enter your name"
          value={formData.user}
          onChange={handleChange}
        />
        <label>
          category:
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">--random--</option>
            {categoryList}
          </select>
        </label>

        <label>
          difficulty
          <select
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
          >
            <option value="">--random--</option>
            {difficultyList}
          </select>
        </label>

        <button>Submit</button>
      </form>
    </section>
  );
}
