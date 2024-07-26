import React, { useContext } from "react";
import "../styles/CreateToDoButton.css";
import { MdAdd } from "react-icons/md";
import { ToDoContext } from "./ToDoContext";

function CreateToDoButton() {
  const { handleOpenModal } = useContext(ToDoContext);
  return (
    <>
      <button
        className="CreateButton"
        onClick={() => {
          handleOpenModal();
        }}
      >
        <MdAdd />
      </button>
    </>
  );
}

export { CreateToDoButton };
