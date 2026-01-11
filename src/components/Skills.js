import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";

function Skills() {
  const [skill, setSkill] = useState("");
  const list = useSelector((state) => state.skills);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Add your Skills</h2>

      <input name="skill" />
      <div className="makeStyles-footer-15">
        <Button
          variant="contained"
          onClick={() => dispatch({ type: "ADD_SKILL", payload: skill })}
        >
          Add
        </Button>
      </div>

      {list.map((s, i) => (
        <input key={i} value={i + 1} readOnly />
      ))}
    </div>
  );
}

export default Skills;
