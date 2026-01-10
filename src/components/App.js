import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import Profile from "./Profile";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Social from "./Social";
import Resume from "./Resume";

function App() {
  const page = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();

  return (
    <>
      <h1>RESUME GENERATOR</h1>

      {page === 1 && <Profile />}
      {page === 2 && <Education />}
      {page === 3 && <Skills />}
      {page === 4 && <Projects />}
      {page === 5 && <Social />}
      {page === 6 && <Resume />}

      <div className="footer">
        <Button
          variant="contained"
          id="back"
          onClick={() => dispatch({ type: "BACK" })}
        >
          Back
        </Button>

        <Button
          variant="contained"
          id="next"
          onClick={() => dispatch({ type: "NEXT" })}
        >
          Next
        </Button>

        <Button
          variant="contained"
          id="save_continue"
          onClick={() => dispatch({ type: "NEXT" })}
        >
          Save & Continue
        </Button>
      </div>
    </>
  );
}

export default App;
