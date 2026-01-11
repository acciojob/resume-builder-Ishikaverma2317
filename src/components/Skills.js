import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Skills() {
  const [skill, setSkill] = useState("");
  const list = useSelector((state) => state.skills);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Add your Skills</h2>

      <input name="skill" onChange={(e) => setSkill(e.target.value)} />
      <button id="add_skill" onClick={() => dispatch({ type: "ADD_SKILL", payload: skill })}>
        Add
      </button>

      {list.map((s, i) => (
        <div key={i}>{i + 1}</div>
      ))}
    </div>
  );
}

export default Skills;
