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

  const handleOpenModal = () => setOpenModal(true);

  const handleCloseModal = () => setOpenModal(false);

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
        }}
      >
        {children}
      </ToDoContext.Provider>
    </>
  );
}

export { ToDoContext, TodoProvider };
