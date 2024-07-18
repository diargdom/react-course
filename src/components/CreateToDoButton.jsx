import React from "react";
import "../styles/CreateToDoButton.css";
import { MdAdd } from "react-icons/md";

function CreateToDoButton() {
  return (
    <>
      <button
        className="CreateButton"
        onClick={(event) => {
          console.log("hola");
          console.log(event);
          console.log(event.target);
        }}
      >
        <MdAdd />
      </button>
    </>
  );
}

export { CreateToDoButton };
