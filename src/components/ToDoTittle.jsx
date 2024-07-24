import React from "react";
import "../styles/ToDoTittle.css";

function ToDoTittle({ total, completed, loading }) {
  return loading ? (
    <h1 className="tittleToDo">Cargando las tareas.</h1>
  ) : total === completed ? (
    <h1 className="tittleToDo">
      Felicidades 🎉🎉🎉, haz completado todos los To DO's
    </h1>
  ) : (
    <h1 className="tittleToDo">
      Haz completado <span>{completed}</span> de <span>{total}</span> To DO's
    </h1>
  );
}

export { ToDoTittle };
