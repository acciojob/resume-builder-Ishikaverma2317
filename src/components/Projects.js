import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Projects() {
  const dispatch = useDispatch();
  const [proj, setProj] = useState({});

  return (
    <div>
      <h2>Add your Mini Projects</h2>

      <input
        name="projectName"
        onChange={(e) =>
          setProj({ ...proj, projectName: e.target.value })
        }
      />

      <input
        name="techStack"
        onChange={(e) =>
          setProj({ ...proj, techStack: e.target.value })
        }
      />

      <textarea
        name="description"
        onChange={(e) =>
          setProj({ ...proj, description: e.target.value })
        }
      />

      <button
        id="add_project"
        onClick={() =>
          dispatch({ type: "ADD_PROJECT", payload: proj })
        }
      >
        Add
      </button>

      <button
        id="delete"
        onClick={() => dispatch({ type: "DELETE_PROJECT" })}
      >
        Delete
      </button>
    </div>
  );
}

export default Projects;
