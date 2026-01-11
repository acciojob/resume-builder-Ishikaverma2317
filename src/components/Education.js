import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Education() {
  const [edu, setEdu] = useState({});
  const list = useSelector((state) => state.education);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Add your Education Details</h2>

      <input name="courseName" onChange={(e) => setEdu({ ...edu, courseName: e.target.value })} />
      <input name="completionYear" onChange={(e) => setEdu({ ...edu, completionYear: e.target.value })} />
      <input name="college" onChange={(e) => setEdu({ ...edu, college: e.target.value })} />
      <input name="percentage" onChange={(e) => setEdu({ ...edu, percentage: e.target.value })} />

      <button id="add_education" onClick={() => dispatch({ type: "ADD_EDUCATION", payload: edu })}>
        Add
      </button>

      {list.map((e, i) => (
        <div key={i}>{i + 1}</div>
      ))}
    </div>
  );
}

export default Education;
