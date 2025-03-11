import React from "react";
import { Line } from "rc-progress";
//redux action
import { useSelector } from "react-redux";
import { selectPercent } from "../redux/todoSlice";

export default function ListPercentline() {
  const todoPercent = useSelector(selectPercent);

  return (
    <>
      <h5 style={{ margin: "0" }}>{todoPercent}%</h5>
      <Line
        percent={todoPercent}
        strokeWidth={2}
        trailWidth={2}
        strokeColor="rgb(165, 167, 247)"
        trailColor="white"
        className="ms-2"
      />
    </>
  );
}
