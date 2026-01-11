import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Projects() {
  const [p, setP] = useState({});
  const list = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Add your Mini Projects</h2>

      <input name="projectName" onChange={(e) => setP({ ...p, projectName: e.target.value })} />
      <input name="techStack" onChange={(e) => setP({ ...p, techStack: e.target.value })} />
      <input name="description" onChange={(e) => setP({ ...p, description: e.target.value })} />

      <button id="add_project" onClick={() => dispatch({ type: "ADD_PROJECT", payload: p })}>
        Add
      </button>

      {list.map((p, i) => (
        <div key={i}>{i + 1}</div>
      ))}
    </div>
  );
}

export default Projects;
