import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Social() {
  const [s, setS] = useState("");
  const list = useSelector((state) => state.social);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Add your Social Media Links</h2>

      <input name="Social" onChange={(e) => setS(e.target.value)} />
      <button id="add_social" onClick={() => dispatch({ type: "ADD_SOCIAL", payload: s })}>
        Add
      </button>

      {list.map((s, i) => (
        <div key={i}>{i + 1}</div>
      ))}
    </div>
  );
}

export default Social;
