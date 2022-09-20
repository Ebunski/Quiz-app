import React, { useEffect } from "react";
import "./welcome-page.scss";
import SelectionPage from "../SelectionPage/SelectionPage";
import { Link as LinkScroll } from "react-scroll";
import { useQuizContext } from "../../contexts/quizContext";

function WelcomePage() {
  const { reset } = useQuizContext();

  useEffect(() => {
   reset();
   console.log("resetting..")
  }, [reset]);
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
          exact="true"
        >
          <button className="welcome__button"> Play </button>
        </LinkScroll>
      </section>
      <SelectionPage />
    </main>
  );
}
export default React.memo(WelcomePage);
