import * as postService from "../services/postService.mjs";

const getPosts = ((request, response) => {
    return postService.getPosts(request, response);
});

const getPost = ((request, response) => {
    return postService.getPost(request, response);
});

const createPost = ((request, response) => {
    return postService.createPost(request, response);
});

const updatePost = ((request, response) => {
    return postService.updatePost(request, response);
});

const deletePost = ((request, response) => {
    return postService.deletePost(request, response);
});

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}