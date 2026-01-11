import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Social() {
  const [social, setSocial] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input name="Social" onChange={e => setSocial(e.target.value)} />
      <button id="add_social" onClick={() => dispatch({ type:"ADD_SOCIAL", payload:social })}>Add</button>
    </div>
  );
}
