import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Social() {
  const dispatch = useDispatch();
  const [link, setLink] = useState("");

  return (
    <div>
      <h2>Add your Social Media Links</h2>

      <input
        name="Social"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />

      <button
        id="add_social"
        onClick={() =>
          dispatch({ type: "ADD_SOCIAL", payload: link })
        }
      >
        Add
      </button>
    </div>
  );
}

export default Social;
