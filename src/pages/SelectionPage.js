import React, { useState } from "react";
import { useQuizContext } from "../contexts/quizContext";

export default function SelectionPage() {
  const { categories, difficulty } = useQuizContext();
  const categoryList = categories.map((x) => (
    <option key={x.id} id={x.id} value={x.name}>
      {x.name}
    </option>
  ));
  const difficultyList = difficulty.map((x, index) => (
    <option key={index} value={x}>
      {x}
    </option>
  ));
  const [selection, setSelection] = useState({
    category: "",
    difficulty: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setSelection((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(selection);
    setSelection({ category: "", difficulty: "" });
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
    </form>
  );
}
