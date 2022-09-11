import React, { useState } from "react";
import { useQuizContext } from "../contexts/quizContext";
import { useNavigate } from "react-router-dom";

export default function SelectionPage() {
  const [selection, setSelection] = useState({
    category: "",
    difficulty: "",
  });
  const navigate = useNavigate();
  const { categories, difficulty, handleSelection, remainingTime } =
    useQuizContext();

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

  function handleChange(event) {
    const { name, value } = event.target;
    setSelection((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    handleSelection(selection);
    setSelection({ category: "", difficulty: "" });
    setTimeout(() => {
      navigate("/quiz");
    }, 1000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        category:
        <select
          name="category"
          value={selection.category}
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
          value={selection.difficulty}
          onChange={handleChange}
        >
          <option value="">--random--</option>
          {difficultyList}
        </select>
      </label>

      <button>Submit</button>
      {remainingTime}
    </form>
  );
}
