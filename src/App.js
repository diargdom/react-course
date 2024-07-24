import React, { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import AppUi from "./components/AppUi";

// localStorage.removeItem('TODOS_V1')
// const defaultToDoItem = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Tomar el curso de Intro a React.js', completed: false},
//   {text: 'Llorar con la Llorona', completed: false},
//   {text: 'Pruebas', completed: false},
//   {text: 'LALALALA', completed: false},
//   {text: 'Usar estados derivados', completed: true},
// ]
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultToDoItem))

function App() {
  const {
    item: toDo,
    saveItem: saveToDos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
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
    <AppUi
      loading={loading}
      error={error}
      completedToDo={completedToDo}
      totalToDo={totalToDo}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedToDo={searchedToDo}
      completeToDo={completeToDo}
      deleteToDo={deleteToDo}
    />
  );
}

export default App;
