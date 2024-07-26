import React, { useContext } from "react";
import "../styles/ToDoSearch.css";
import { ToDoContext } from "./ToDoContext";

function ToDoSearch() {
  const { searchValue, setSearchValue } = useContext(ToDoContext);

  return (
    <>
      <div className="ToDoSearch">
        <input
          type="text"
          className="searchTerm"
          placeholder="Filtra los ToDo's..."
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
      </div>
    </>
  );
}

export { ToDoSearch };
