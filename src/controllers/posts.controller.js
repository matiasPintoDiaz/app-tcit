const getAllPosts = async(req, res) => {
    res.send('GET posts');
};

const getPost = async(req, res) => {
    res.send('GET one post');
};

const createPost = async(req, res) => {
    res.send('POST post');
};

const deletePost = async(req, res) => {
    res.send('DELETE post');
};

module.exports = {
    getAllPosts,
    getPost,
    createPost,
    deletePost
}