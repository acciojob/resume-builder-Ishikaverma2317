import React from "react";

import { useDispatch } from "react-redux";
import { useState } from "react";

function Education() {
  const dispatch = useDispatch();
  const [edu, setEdu] = useState({});

  return (
    <>
      <input name="courseName" onChange={(e) => setEdu({ ...edu, courseName: e.target.value })} />
      <input name="completionYear" />
      <input name="college" />
      <input name="percentage" />

      <button
        id="add_education"
        onClick={() => dispatch({ type: "ADD_EDUCATION", payload: edu })}
      >
        Add
      </button>

      <button id="delete" onClick={() => dispatch({ type: "DELETE_EDUCATION", payload: 0 })}>
        Delete
      </button>
    </>
  );
}

export default Education;
