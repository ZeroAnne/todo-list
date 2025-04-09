import React, { useLayoutEffect, useState } from "react";
import { Line } from "rc-progress";
//redux action
import { useSelector } from "react-redux";
import { selectPercent } from "../redux/todoSlice";
import { toggleTheme } from "../redux/themeSlice";

export default function ListPercentline() {
  const [strokeColor, setStrokeColor] = useState("rgb(165,167,247)");

  const todoPercent = useSelector(selectPercent);
  const theme = useSelector((state) => state.theme.mode);

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      const currentColor = getComputedStyle(document.documentElement)
        .getPropertyValue("--PrimaryColor")
        .trim();
      setStrokeColor(currentColor);
      console.log("strokeColor:", currentColor);
    });
  }, [theme]);
  return (
    <>
      <h5 style={{ margin: "0" }}>{todoPercent}%</h5>
      <Line
        percent={todoPercent}
        strokeWidth={2}
        trailWidth={2}
        strokeColor={strokeColor}
        trailColor="white"
        className="ms-2"
      />
    </>
  );
}
