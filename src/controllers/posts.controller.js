const pool = require("../db");
const { v4: uuid } = require("uuid");

// Función donde ejecuta query para obtener todos los posts de la base de datos
const getAllPosts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM post");
    res.json(result.rows);
  } catch (error) {
    res.json({ error: error.message });
  }
};

// Función donde ejecuta query para obtener solo un post según el nombre
const getPost = async (req, res) => {
  const { nombre } = req.params;

  try {
    const result = await pool.query("SELECT * FROM post WHERE nombre = $1", [
      nombre,
    ]);

    if (result.rows.length === 0) {
      res.json({
        message: "Post no encontrado.",
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.json({ error: error.message });
  }
};

// Función donde ejecuta query para crear un post
const createPost = async (req, res) => {
  const { nombre, descripcion } = req.body;
  const id = uuid();

  try {
    const result = await pool.query(
      "INSERT INTO post (id, nombre, descripcion) VALUES ($1, $2, $3) RETURNING *",
      [id, nombre, descripcion]
    );

    res.json(result.rows[0]);
  } catch (error) {
    res.json({ error: error.message });
  }
};

// Función donde ejecuta query para eliminar un post de la base de datos
const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "DELETE FROM post WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      res.json({
        message: "Post no encontrado.",
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = {
  getAllPosts,
  getPost,
  createPost,
  deletePost,
};
