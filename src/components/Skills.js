import React,{useState} from "react";
import {useDispatch} from "react-redux";

function Skills(){
  const [skill,setSkill]=useState("");
  const dispatch=useDispatch();

  return(
    <div>
      <input name="skill" onChange={e=>setSkill(e.target.value)}/>
      <button id="add_skill" onClick={()=>dispatch({type:"ADD_SKILL",payload:skill})}>Add</button>
      <button id="delete_skill">Delete</button>
    </div>
  );
}

export default Skills;
