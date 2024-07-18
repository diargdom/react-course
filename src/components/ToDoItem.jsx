import React from "react";
import "../styles/ToDoItem.css";
import { FcApproval } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

function ToDoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onCompleted}
      >
        {props.completed === true ? <FcApproval /> : <FaCheckCircle />}
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <MdDelete />
      </span>
    </li>
  );
}

export { ToDoItem };
