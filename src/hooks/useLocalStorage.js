import React, { useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem = !localStorageItem
    ? (localStorage.setItem(itemName, JSON.stringify(initialValue)),
      initialValue)
    : JSON.parse(localStorageItem);

  const [item, setItem] = useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

export default useLocalStorage;
