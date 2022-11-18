import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";

export default function FormPosts() {
  const [post, setPost] = useState({
    nombre: "",
    descripcion: "",
  });

  // Evento que realiza petición POST con los datos del formulario y crea post
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:4000/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    alert(`Post Creado: \n
            Nombre: ${data.nombre}
            Descripción: ${data.descripcion}`);

    window.location.reload(false);
  };

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography>
        <strong>Crear Post:</strong>
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Nombre"
          variant="outlined"
          sx={{ display: "block", margin: "1rem 0" }}
          name="nombre"
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Descripción..."
          variant="outlined"
          multiline
          rows={3}
          sx={{ display: "block", margin: "1rem 0" }}
          name="descripcion"
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">
          CREAR
        </Button>
      </form>
    </Box>
  );
}
