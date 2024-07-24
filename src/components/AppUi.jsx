import React from "react";
import { CreateToDoButton } from "./CreateToDoButton";
import { ToDoItem } from "./ToDoItem";
import { ToDoList } from "./ToDoList";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoTittle } from "./ToDoTittle";
import { TodosLoading } from "./TodosLoading";
import { TodosError } from "./TodosError";
import { EmptyTodos } from "./EmptyTodos";

function AppUi({
  loading,
  error,
  completedToDo,
  totalToDo,
  searchValue,
  setSearchValue,
  searchedToDo,
  completeToDo,
  deleteToDo,
}) {
  return (
    <>
      <ToDoTittle
        completed={completedToDo}
        total={totalToDo}
        loading={loading}
      />
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

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
    </>
  );
}

export default AppUi;
