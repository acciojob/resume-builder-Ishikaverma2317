import React from "react";
import { useSelector } from "react-redux";

function Resume() {
  const data = useSelector((state) => state);

  return (
    <div>
      <h2>Final Resume</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Resume;
