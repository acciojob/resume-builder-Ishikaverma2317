import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Profile() {
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  return (
    <div>
      <h2>Add your profile details</h2>

      {["fname", "lname", "phone", "address", "url"].map((f) => (
        <input
          key={f}
          name={f}
          onChange={(e) =>
            setData({ ...data, [f]: e.target.value })
          }
        />
      ))}

      <button onClick={() => dispatch({ type: "SAVE_PROFILE", payload: data })}>
        Save
      </button>
    </div>
  );
}

export default Profile;
