const pool = require("../db");

const getAllPosts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM post");
    res.json(result.rows);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("SELECT * FROM post WHERE id = $1", [id]);

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

const createPost = async (req, res) => {
  const { nombre, descripcion } = req.body;

  // console.log(nombre, descripcion);
  try {
    const result = await pool.query(
      "INSERT INTO post (nombre, descripcion) VALUES ($1, $2) RETURNING *",
      [nombre, descripcion]
    );

    res.json(result.rows[0]);
  } catch (error) {
    res.json({ error: error.message });
  }
};

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
