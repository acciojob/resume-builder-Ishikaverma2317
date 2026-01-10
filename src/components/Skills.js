import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Skills() {
  const dispatch = useDispatch();
  const [skill, setSkill] = useState("");

  return (
    <div>
      <h2>Add your Skills</h2>

      <input
        name="skill"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />

      <button
        id="add_skill"
        onClick={() =>
          dispatch({ type: "ADD_SKILL", payload: skill })
        }
      >
        Add
      </button>

      <button
        id="delete_skill"
        onClick={() => dispatch({ type: "DELETE_SKILL" })}
      >
        Delete
      </button>
    </div>
  );
}

export default Skills;
