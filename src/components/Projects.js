import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";

function Projects() {
  const [p, setP] = useState({});
  const list = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Add your Mini Projects</h2>

      <input name="projectName" onChange={(e) => setP({ ...p, projectName: e.target.value })} />
      <input name="techStack" onChange={(e) => setP({ ...p, techStack: e.target.value })} />
      <textarea name="description" onChange={(e) => setP({ ...p, description: e.target.value })} />

      <div className="makeStyles-footer-15">
        <Button
          variant="contained"
          onClick={() => dispatch({ type: "ADD_PROJECT", payload: p })}
        >
          Add
        </Button>
      </div>

      {list.map((p, i) => (
        <input key={i} value={i + 1} readOnly />
      ))}
    </div>
  );
}

export default Projects;
