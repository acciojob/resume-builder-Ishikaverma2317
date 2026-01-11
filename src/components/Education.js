import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Education() {
  const dispatch = useDispatch();
  const [edu, setEdu] = useState({});

  return (
    <div>
      <h2>Add your Education Details</h2>

      {["courseName", "completionYear", "college", "percentage"].map((f) => (
        <input key={f} name={f} onChange={(e) =>
          setEdu({ ...edu, [f]: e.target.value })
        } />
      ))}

      <button id="add_education" onClick={() =>
        dispatch({ type: "ADD_EDUCATION", payload: edu })
      }>Add</button>

      <button id="delete" onClick={() =>
        dispatch({ type: "DELETE_EDUCATION" })
      }>Delete</button>

      <Button
  variant="contained"
  color="primary"
>
  Save Education
</Button>

    </div>

    
  );
}


export default Education;
