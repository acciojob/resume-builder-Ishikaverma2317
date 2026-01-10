import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Projects() {
  const dispatch = useDispatch();
  const [proj, setProj] = useState({});

  return (
    <div>
      <h2>Add your Mini Projects</h2>

      {["projectName", "techStack", "description"].map((f) => (
        <input key={f} name={f} onChange={(e) =>
          setProj({ ...proj, [f]: e.target.value })
        } />
      ))}

      <button id="add_project" onClick={() =>
        dispatch({ type: "ADD_PROJECT", payload: proj })
      }>Add</button>

      <button id="delete" onClick={() =>
        dispatch({ type: "DELETE_PROJECT" })
      }>Delete</button>
    </div>
  );
}

export default Projects;
