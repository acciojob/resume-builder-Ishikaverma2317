import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Education() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    courseName: "",
    completionYear: "",
    college: "",
    percentage: ""
  });

  const add = () => {
    dispatch({ type: "ADD_EDUCATION", payload: data });
  };

  return (
    <div>
      <input name="courseName" onChange={e => setData({ ...data, courseName: e.target.value })} />
      <input name="completionYear" onChange={e => setData({ ...data, completionYear: e.target.value })} />
      <input name="college" onChange={e => setData({ ...data, college: e.target.value })} />
      <input name="percentage" onChange={e => setData({ ...data, percentage: e.target.value })} />

      <button id="add_education" onClick={add}>Add</button>
      <button id="delete">Delete</button>
    </div>
  );
}
