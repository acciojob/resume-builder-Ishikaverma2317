import React from "react";
import {useSelector} from "react-redux";

function Resume(){
  const data = useSelector(state=>state);
  return <pre>{JSON.stringify(data,null,2)}</pre>;
}
export default Resume;
