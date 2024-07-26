import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };

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
