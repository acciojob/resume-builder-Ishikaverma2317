import React from "react";

import { useDispatch } from "react-redux";
import { useState } from "react";

function Profile() {
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  return (
    <>
      <input name="fname" onChange={(e) => setData({ ...data, fname: e.target.value })} />
      <input name="lname" onChange={(e) => setData({ ...data, lname: e.target.value })} />
      <input name="phone" />
      <input name="address" />
      <input name="url" />

      <button
        onClick={() =>
          dispatch({ type: "SAVE_PROFILE", payload: data })
        }
      >
        Save
      </button>
    </>
  );
}

export default Profile;
