import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";

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

      <div className="makeStyles-footer-15">
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch({ type: "ADD_EDUCATION", payload: edu })}
        >
          Add
        </Button>
      </div>

      {list.map((e, i) => (
        <input key={i} value={i + 1} readOnly />
      ))}
    </div>
  );
}

export default Education;
