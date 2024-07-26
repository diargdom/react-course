import React, { useContext } from "react";
import { createPortal } from "react-dom";
import "../../styles/Modal.css";
import { Box, Button, TextField } from "@mui/material";
import { ToDoContext } from "../ToDoContext";
import { IoMdClose } from "react-icons/io";

function ModalTodo({ children }) {
  const { handleCloseModal } = useContext(ToDoContext);

  const styleBox = {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #000",
    borderRadius: "8px",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    position: "absolute",
  };
  const styleButtonClose = {
    position: "absolute",
    top: 8,
    right: 8,
  };

  return createPortal(
    <div className="Modal">
      <div className="ModalContent">
        <Box sx={styleBox}>
          <Button onClick={handleCloseModal} sx={styleButtonClose}>
            <IoMdClose />
          </Button>
          <h2 id="child-modal-title">Añadir nueva tarea</h2>
          <TextField
            label="Ingresa la tarea"
            variant="outlined"
            fullWidth
            //value={task}
            //onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="contained"
              // onClick={handleAdd}
            >
              Agregar
            </Button>
            <Button variant="outlined" onClick={handleCloseModal}>
              Cancelar
            </Button>
          </Box>
        </Box>
      </div>
      {children}
    </div>,
    document.getElementById("modal")
  );
}

export { ModalTodo };
