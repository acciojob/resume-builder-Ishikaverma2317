import React from "react";
import Profile from "./Profile";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Social from "./Social";

function App() {
  return (
    <div>
      <h1>RESUME GENERATOR</h1>

      <Profile />
      <Education />
      <Skills />
      <Projects />
      <Social />
    </div>
  );
}

export default App;
