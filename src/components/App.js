import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Profile from "./Profile";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Social from "./Social";

export default function App() {
  const page = useSelector(state => state.page);
  const dispatch = useDispatch();

  const next = () => dispatch({ type: "NEXT" });
  const back = () => dispatch({ type: "BACK" });

  return (
    <div>
      <h1>Resume Builder</h1>

      {page === 1 && <Profile />}
      {page === 2 && <Education />}
      {page === 3 && <Skills />}
      {page === 4 && <Projects />}
      {page === 5 && <Social />}

      {/* Cypress Footer */}
      <div className="makeStyles-footer-15">
        <button id="back" className="MuiButton-contained" onClick={back}>Back</button>
        <button id="next" className="MuiButton-contained" onClick={next}>Next</button>
        <button id="save_continue" className="MuiButton-contained">Save</button>
      </div>
    </div>
  );
}
