import React from "react";
import "./ToDoItems.css";

function ToDoItem(props) {
  return (
    <div className="todo__body">
      <li>{props.text}</li>
      <button className="todo__button"
        onClick={() => {
          props.onChecked(props.id);
        }}
      >
        X
      </button>
    </div>
  );
}

export default ToDoItem;
