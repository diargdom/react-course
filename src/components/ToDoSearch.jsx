import React from "react";
import "../styles/ToDoSearch.css";

function ToDoSearch({searchValue, setSearchValue}) {
  
  
  return (
    <>
      <div className="ToDoSearch">
        <input
          type="text"
          className="searchTerm"
          placeholder="Filtra los ToDo's..."
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value)
          }}
        />
      </div>
    </>
  );
}

export { ToDoSearch };
