import { createContext, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const ToDoContext = createContext();

function TodoProvider({ children }) {
  const {
    item: toDo,
    saveItem: saveToDos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [newTask, setNewTask] = useState("");

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

  const addTodo = () => {
    if (newTask.trim()) {
      const newToDos = [...toDo, { text: newTask, completed: false }];
      saveToDos(newToDos);
      setNewTask("");
      handleCloseModal();
    }
  };

  const handleOpenModal = () => setOpenModal(true);

  const handleCloseModal = () => setOpenModal(false);

  const handleTaskChange = (event) => setNewTask(event.target.value);

  return (
    <>
      <ToDoContext.Provider
        value={{
          loading,
          error,
          completedToDo,
          totalToDo,
          searchValue,
          setSearchValue,
          searchedToDo,
          completeToDo,
          deleteToDo,
          openModal,
          handleOpenModal,
          handleCloseModal,
          addTodo,
          newTask,
          handleTaskChange,
        }}
      >
        {children}
      </ToDoContext.Provider>
    </>
  );
}

export { ToDoContext, TodoProvider };
