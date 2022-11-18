const { Router } = require("express");
const router = Router();
const {
  getAllPosts,
  getPost,
  createPost,
  deletePost,
} = require("../controllers/posts.controller");

// Endpoint para obtener todos los posts existentes en la base de datos
router.get("/posts", getAllPosts);

// Endpoint para obtener solo un post mediante su nombre (propiedad única)
router.get("/posts/:nombre", getPost);

// Endpoint para crear un post
router.post("/posts", createPost);

// Endpoint para eliminar post
router.delete("/posts/:id", deletePost);

module.exports = router;
