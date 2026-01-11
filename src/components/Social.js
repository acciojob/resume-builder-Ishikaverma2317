import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";

function Social() {
  const [s, setS] = useState("");
  const list = useSelector((state) => state.social);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Add your Social Media Links</h2>

      <input name="Social" />
      <div className="makeStyles-footer-15">
        <Button
          variant="contained"
          onClick={() => dispatch({ type: "ADD_SOCIAL", payload: s })}
        >
          Add
        </Button>
      </div>

      {list.map((s, i) => (
        <input key={i} value={i + 1} readOnly />
      ))}
    </div>
  );
}

export default Social;
