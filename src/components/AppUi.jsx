import React, { useContext } from "react";
import { CreateToDoButton } from "./CreateToDoButton";
import { ToDoItem } from "./ToDoItem";
import { ToDoList } from "./ToDoList";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoTittle } from "./ToDoTittle";
import { TodosLoading } from "./TodosLoading";
import { TodosError } from "./TodosError";
import { EmptyTodos } from "./EmptyTodos";
import { ToDoContext } from "./ToDoContext";
import { ModalTodo } from "./Modal";

function AppUi() {
  const { loading, error, searchedToDo, completeToDo, deleteToDo, openModal } =
    useContext(ToDoContext);
  return (
    <>
      <ToDoTittle />
      <ToDoSearch />
      <ToDoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {!loading && searchedToDo.length === 0 && <EmptyTodos />}

        {searchedToDo.map((todos) => (
          <ToDoItem
            key={todos.text}
            text={todos.text}
            completed={todos.completed}
            onCompleted={() => completeToDo(todos.text)}
            onDelete={() => deleteToDo(todos.text)}
          />
        ))}
      </ToDoList>

      <CreateToDoButton />

      {openModal && <ModalTodo>Pruebas</ModalTodo>}
    </>
  );
}

export { AppUi };
