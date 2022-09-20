import React from "react";
import { Link } from "react-router-dom";

export default function WrongPage() {
  return (
    <main className="center">
      <h2>Ooops! Can't find the page you are looking for</h2>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </main>
  );
}
