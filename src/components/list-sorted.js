import React from "react";
import { useDispatch } from "react-redux";
//bootstrap
import Form from "react-bootstrap/Form";
//redux action
import { sortedTodo } from "../redux/todoSlice";

export default function ListSorted() {
  const dispatch = useDispatch();

  return (
    <>
      <h6 className="me-2 text-center">Move done things to end?</h6>
      <Form>
        <Form.Check
          type="switch"
          id="switch"
          onChange={(e) => dispatch(sortedTodo(e.target.checked))}
        />
      </Form>
    </>
  );
}
