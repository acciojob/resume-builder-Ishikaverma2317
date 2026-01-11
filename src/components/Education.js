import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Education() {
  const [edu, setEdu] = useState({});
  const dispatch = useDispatch();

  return (
    <div>
      <input name="courseName" onChange={e=>setEdu({...edu,courseName:e.target.value})}/>
      <input name="completionYear" onChange={e=>setEdu({...edu,completionYear:e.target.value})}/>
      <input name="college" onChange={e=>setEdu({...edu,college:e.target.value})}/>
      <input name="percentage" onChange={e=>setEdu({...edu,percentage:e.target.value})}/>

      <button id="add_education" onClick={()=>dispatch({type:"ADD_EDUCATION",payload:edu})}>Add</button>
      <button id="delete">Delete</button>
    </div>
  );
}

export default Education;
