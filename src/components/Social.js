import React,{useState} from "react";
import {useDispatch} from "react-redux";

function Social(){
  const [s,setS]=useState("");
  const dispatch=useDispatch();

  return(
    <div>
      <input name="Social" onChange={e=>setS(e.target.value)}/>
      <button id="add_social" onClick={()=>dispatch({type:"ADD_SOCIAL",payload:s})}>Add</button>
    </div>
  );
}

export default Social;
