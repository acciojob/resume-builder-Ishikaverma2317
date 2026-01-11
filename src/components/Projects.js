import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Projects() {
  const dispatch = useDispatch();
  const [data, setData] = useState({ projectName:"", techStack:"", description:"" });

  return (
    <div>
      <input name="projectName" onChange={e => setData({ ...data, projectName: e.target.value })} />
      <input name="techStack" onChange={e => setData({ ...data, techStack: e.target.value })} />
      <textarea name="description" onChange={e => setData({ ...data, description: e.target.value })} />

      <button id="add_project" onClick={() => dispatch({ type:"ADD_PROJECT", payload:data })}>Add</button>
      <button id="delete">Delete</button>
    </div>
  );
}
