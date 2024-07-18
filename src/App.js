import React, { useState } from "react";
import { CreateToDoButton } from './components/CreateToDoButton';
import { ToDoItem } from './components/ToDoItem';
import { ToDoList } from './components/ToDoList';
import { ToDoSearch } from './components/ToDoSearch';
import { ToDoTittle } from './components/ToDoTittle';


const defaultToDoItem = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar el curso de Intro a React.js', completed: false},
  {text: 'Llorar con la Llorona', completed: false},
  {text: 'Pruebas', completed: false},
  {text: 'LALALALA', completed: false},
  {text: 'Usar estados derivados', completed: true},
]

function App() {
  const [toDoItem, setToDoItem] = useState(defaultToDoItem)
  const [searchValue, setSearchValue] = useState('')
  

  const completedToDo = toDoItem.filter(toDo => !!toDo.completed).length
  const totalToDo = toDoItem.length
  const searchedToDo = toDoItem.filter((toDo) => {
    const toDoText = toDo.text.toLowerCase()
    const searchText = searchValue.toLowerCase()  
    return toDoText.includes(searchText)
    }
  )  

  const completeToDo = (text) => {
    const newToDo = [...toDoItem]
    const toDoIndex = newToDo.findIndex((toDoInd) => toDoInd.text === text)
    newToDo[toDoIndex].completed = true
    setToDoItem(newToDo)
  }

  const deleteToDo = (text) => {
    const newToDos = [...toDoItem]
    const toDoIndex = newToDos.findIndex((ToDoIndex) => ToDoIndex.text === text)
    newToDos.splice(toDoIndex, 1)
    setToDoItem(newToDos)
  }
  
  return (
    <>
      <ToDoTittle completed={completedToDo} total={totalToDo} />
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

      <ToDoList>
        {searchedToDo.map(todos => (
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
