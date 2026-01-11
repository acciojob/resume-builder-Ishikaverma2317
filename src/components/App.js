import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Profile from "./Profile";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Social from "./Social";

export default function App() {
  const page = useSelector(s => s.page);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>RESUME GENERATOR</h1>

      {page === 1 && <Profile />}
      {page === 2 && <Education />}
      {page === 3 && <Skills />}
      {page === 4 && <Projects />}
      {page === 5 && <Social />}

      <div className="makeStyles-footer-15">
        <button id="back" className="MuiButton-contained" onClick={() => dispatch({ type:"BACK" })}>Back</button>
        <button id="next" className="MuiButton-contained" onClick={() => dispatch({ type:"NEXT" })}>Next</button>
        <button id="save_continue" className="MuiButton-contained">Save</button>
      </div>
    </div>
  );
}
