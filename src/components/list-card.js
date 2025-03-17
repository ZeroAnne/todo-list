import React from "react";

import "../App.scss";

//bootstrap
import Card from "react-bootstrap/Card";
//icon
import { X } from "react-bootstrap-icons";
// redux actions
import { useDispatch, useSelector } from "react-redux";
import { selectTodo, toggleChecked, deleteTodo } from "../redux/todoSlice";

export default function ListCard() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodo);

  return (
    <>
      {/* 判斷排序開關 */}
      {todos.map((v, i) => (
        <div key={i}>
          <div className="mt-3">
            <Card className="decorative-line-card">
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div
                  className={
                    v.checked
                      ? "text-decoration-line-through d-flex align-items-center"
                      : "d-flex align-items-center"
                  }
                >
                  <input
                    type="checkbox"
                    checked={v.checked}
                    onChange={() => dispatch(toggleChecked(v.id))}
                    className="me-4 checkbox-large form-check-input"
                  />
                  <div className="list-word">{v.name}</div>
                </div>
                <div>
                  <button
                    className="btn"
                    onClick={() => dispatch(deleteTodo(v.id))}
                  >
                    <X className="thirdcolor" size={36} />
                  </button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      ))}
    </>
  );
}
