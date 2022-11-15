const { Router } = require('express');
const router = Router();
const { getAllPosts, getPost, createPost, deletePost } = require('../controllers/posts.controller');

router.get('/posts', getAllPosts);

router.get('/posts/10', getPost);

router.post('/posts', createPost);

router.delete('/posts', deletePost);

module.exports = router;