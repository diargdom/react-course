import React, { useState } from "react";
import { CreateToDoButton } from "./components/CreateToDoButton";
import { ToDoItem } from "./components/ToDoItem";
import { ToDoList } from "./components/ToDoList";
import { ToDoSearch } from "./components/ToDoSearch";
import { ToDoTittle } from "./components/ToDoTittle";
import useLocalStorage from "./hooks/useLocalStorage";

// const defaultToDoItem = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Tomar el curso de Intro a React.js', completed: false},
//   {text: 'Llorar con la Llorona', completed: false},
//   {text: 'Pruebas', completed: false},
//   {text: 'LALALALA', completed: false},
//   {text: 'Usar estados derivados', completed: true},
// ]
// localStorage.setItem('ToDoS_V1', JSON.stringify(defaultToDoItem))

//localStorage.removeItem('ToDoS_V1')

function App() {
  const [toDo, saveToDos] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");

  const completedToDo = toDo.filter((todo) => !!todo.completed).length;
  const totalToDo = toDo.length;
  const searchedToDo = toDo.filter((todo) => {
    const toDoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return toDoText.includes(searchText);
  });

  const completeToDo = (text) => {
    const newToDo = [...toDo];
    const toDoIndex = newToDo.findIndex((toDoInd) => toDoInd.text === text);
    newToDo[toDoIndex].completed = true;
    saveToDos(newToDo);
  };

  const deleteToDo = (text) => {
    const newToDos = [...toDo];
    const toDoIndex = newToDos.findIndex(
      (ToDoIndex) => ToDoIndex.text === text
    );
    newToDos.splice(toDoIndex, 1);
    saveToDos(newToDos);
  };

  return (
    <>
      <ToDoTittle completed={completedToDo} total={totalToDo} />
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <ToDoList>
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

export default App;
