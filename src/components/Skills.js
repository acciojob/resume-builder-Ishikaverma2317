import React from "react";

import { useDispatch } from "react-redux";
import { useState } from "react";

function Skills() {
  const [skill, setSkill] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <input name="skill" onChange={(e) => setSkill(e.target.value)} />

      <button
        id="add_skill"
        onClick={() => dispatch({ type: "ADD_SKILL", payload: skill })}
      >
        Add
      </button>

      <button
        id="delete_skill"
        onClick={() => dispatch({ type: "DELETE_SKILL", payload: 0 })}
      >
        Delete
      </button>
    </>
  );
}

export default Skills;
