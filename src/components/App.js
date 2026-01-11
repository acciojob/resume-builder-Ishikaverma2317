import React, { useState } from "react";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Social from "./components/Social";

export default function App() {
  const [page, setPage] = useState(0);

  return (
    <div>
      <h1>RESUME GENERATOR</h1>

      {page === 0 && <Profile />}
      {page === 1 && <Education />}
      {page === 2 && <Skills />}
      {page === 3 && <Projects />}
      {page === 4 && <Social />}

      <button id="back" onClick={() => setPage(page - 1)}>Back</button>
      <button id="next" onClick={() => setPage(page + 1)}>Next</button>
      <button id="save_continue">Save</button>
    </div>
  );
}
