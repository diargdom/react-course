import React from "react";
import { createPortal } from "react-dom";
import "../../styles/Modal.css";
import { TodoForm } from "../TodoForm";

function ModalTodo({ children }) {
  return createPortal(
    <div className="Modal">
      <div className="ModalContent">
        <TodoForm />
      </div>
      {children}
    </div>,
    document.getElementById("modal")
  );
}

export { ModalTodo };
