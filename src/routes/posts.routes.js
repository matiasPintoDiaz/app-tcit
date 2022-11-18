const { Router } = require("express");
const router = Router();
const {
  getAllPosts,
  getPost,
  createPost,
  deletePost,
} = require("../controllers/posts.controller");

router.get("/posts", getAllPosts);

router.get("/posts/:nombre", getPost);

router.post("/posts", createPost);

router.delete("/posts/:id", deletePost);

module.exports = router;
