import React, { useContext } from "react";
import "../styles/ToDoTittle.css";
import { ToDoContext } from "./ToDoContext";

function ToDoTittle() {
  const { loading, totalToDo, completedToDo } = useContext(ToDoContext);
  return loading ? (
    <h1 className="tittleToDo">Cargando las tareas...</h1>
  ) : totalToDo === completedToDo ? (
    <h1 className="tittleToDo">
      Felicidades 🎉🎉🎉, haz completado todos los To DO's
    </h1>
  ) : (
    <h1 className="tittleToDo">
      Haz completado <span>{completedToDo}</span> de <span>{totalToDo}</span> To
      DO's
    </h1>
  );
}

export { ToDoTittle };
