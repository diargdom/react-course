import React, { useContext } from "react";
import "../styles/ToDoTittle.css";
import { ToDoContext } from "./ToDoContext";

function ToDoTittle() {
  const { loading, totalToDo, completedToDo } = useContext(ToDoContext);
  return (
    <h1 className="tittleToDo">
      {loading
        ? "Cargando las tareas..."
        : totalToDo === 0
        ? "No tienes TODOs asignados"
        : totalToDo === completedToDo
        ? "Felicidades 🎉🎉🎉, has completado todos los TODOs"
        : `Haz completado ${completedToDo} de ${totalToDo} TODOs`}
    </h1>
  );
}

export { ToDoTittle };
