import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Profile() {
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  return (
    <div>
      <h2>Add your profile details</h2>

      <input name="fname" onChange={(e)=>setData({...data,fname:e.target.value})}/>
      <input name="lname" onChange={(e)=>setData({...data,lname:e.target.value})}/>
      <input name="phone" onChange={(e)=>setData({...data,phone:e.target.value})}/>
      <input name="address" onChange={(e)=>setData({...data,address:e.target.value})}/>
      <input name="url" onChange={(e)=>setData({...data,url:e.target.value})}/>

      <button onClick={() => dispatch({ type: "SAVE_PROFILE", payload: data })}>Save</button>
    </div>
  );
}

export default Profile;
