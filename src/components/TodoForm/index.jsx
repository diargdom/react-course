import React, { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { Box, Button, TextField } from "@mui/material";
import { ToDoContext } from "../ToDoContext";
import { styleBox, styleBoxButtons, styleButtonClose } from "./TodoFormStyles";

function TodoForm() {
  const { handleCloseModal, addTodo, newTask, handleTaskChange } =
    useContext(ToDoContext);

  return (
    <Box sx={styleBox}>
      <Button onClick={handleCloseModal} sx={styleButtonClose}>
        <IoMdClose />
      </Button>
      <h2 id="modal-title">Escribe un nuevo TODO</h2>
      <TextField
        label="Ingresa el TODO"
        variant="outlined"
        fullWidth
        value={newTask}
        onChange={handleTaskChange}
        sx={{ mb: 2 }}
      />
      <Box sx={styleBoxButtons}>
        <Button variant="contained" onClick={addTodo}>
          Agregar
        </Button>
        <Button variant="outlined" onClick={handleCloseModal}>
          Cancelar
        </Button>
      </Box>
    </Box>
  );
}

export { TodoForm };
