import React from "react";
import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  TextField,
} from "@mui/material";

export default function ListPosts() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  // Función que obtiene los posts de la base de datos y los setea para poder mostrarlos
  const loadPosts = async () => {
    const res = await fetch("http://localhost:4000/posts");
    const data = await res.json();
    setPosts(data);
  };

  // Evento que elimina un post de la base de datos según su id
  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:4000/posts/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    setPosts(posts.filter((post) => post.id !== id));

    alert(`Post Eliminado: \n
            Nombre: ${data.nombre}
            Descripción: ${data.descripcion}`);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // Condicional donde pregunta si lo que está escrito en el textfield de búsqueda existe en el array "posts"
  let results = [];
  if (!search) {
    results = posts;
  } else {
    results = posts.filter((post) =>
      post.nombre.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <>
      <Typography>
        <strong>Lista de Posts:</strong>
      </Typography>
      <br />
      <TextField
        id="outlined-basic"
        label="Buscar Post"
        variant="outlined"
        sx={{ display: "block", margin: "1rem 0" }}
        name="nombre"
        onChange={handleChange}
      />
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>NOMBRE</TableCell>
              <TableCell align="center">DESCRIPCIÓN</TableCell>
              <TableCell align="right">ACCIÓN</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((post) => (
              <TableRow
                key={post.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {post.nombre}
                </TableCell>
                <TableCell align="center">{post.descripcion}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => handleDelete(post.id)}
                  >
                    Eliminar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
