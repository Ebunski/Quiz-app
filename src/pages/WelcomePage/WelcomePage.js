import React from "react";
import "./style.scss";
import SelectionPage from "../SelectionPage/SelectionPage";
import { Link as LinkScroll } from "react-scroll";

export default function WelcomePage() {
  return (
    <main>
      <section className="welcome">
        <h1 className="welcome__title">Quiz</h1>
        <p className="welcome__text">
          Think you can get all the questions right?
        </p>
        <LinkScroll
          to="selection"
          smooth={true}
          duration={2000}
          spy={true}
          exact={true}
        >
          <button className="welcome__button"> Play </button>
        </LinkScroll>
      </section>
      <SelectionPage />
    </main>
  );
}
