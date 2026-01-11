import React,{useState} from "react";
import {useDispatch} from "react-redux";

function Projects(){
  const [p,setP]=useState({});
  const dispatch=useDispatch();

  return(
    <div>
      <input name="projectName" onChange={e=>setP({...p,projectName:e.target.value})}/>
      <input name="techStack" onChange={e=>setP({...p,techStack:e.target.value})}/>
      <input name="description" onChange={e=>setP({...p,description:e.target.value})}/>
      <button id="add_project" onClick={()=>dispatch({type:"ADD_PROJECT",payload:p})}>Add</button>
      <button id="delete">Delete</button>
    </div>
  );
}

export default Projects;
