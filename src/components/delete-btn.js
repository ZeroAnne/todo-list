import React from "react";
// icon
import { X } from "react-bootstrap-icons";
//引用勾子Hooks
import { useDispatch } from "react-redux";
import { deleteAlltodo } from "../redux/todoSlice";

export default function DeleteBtn() {
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="btn d-flex align-items-center"
        onClick={() => dispatch(deleteAlltodo())}
      >
        <X className="secondcolor" size={28} />
        <p style={{ margin: "0" }}>Delete all things</p>
      </button>
    </>
  );
}
