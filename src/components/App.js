import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Profile from "./Profile";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Social from "./Social";
import Resume from "./Resume";

function App() {
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>RESUME GENERATOR</h1>

      {page === 1 && <Profile />}
      {page === 2 && <Education />}
      {page === 3 && <Skills />}
      {page === 4 && <Projects />}
      {page === 5 && <Social />}
      {page === 6 && <Resume />}

      <div>
        {page > 1 && <button id="back" onClick={() => dispatch({ type: "BACK" })}>Back</button>}
        {page < 6 && <button id="next" onClick={() => dispatch({ type: "NEXT" })}>Next</button>}
        {page === 5 && <button id="save_continue" onClick={() => dispatch({ type: "NEXT" })}>Save & Continue</button>}
      </div>
    </div>
  );
}

export default App;
