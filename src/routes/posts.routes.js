const { Router } = require('express');
const router = Router();

router.get('/posts', (req, res) => {
    res.send('GET posts');
});

router.get('/posts/10', (req, res) => {
    res.send('GET one post');
});

router.post('/posts', (req, res) => {
    res.send('POST post');
});

router.delete('/posts', (req, res) => {
    res.send('DELETE post');
});

module.exports = router;