import PostService from "../services/postService.mjs";

class PostController {
    getPosts = (request, response) => {
        return PostService.getPosts(request, response);
    }

    getPost = (request, response) => {
        return PostService.getPost(request, response);
    }

    createPost = (request, response) => {
        return PostService.createPost(request, response);
    }

    updatePost = (request, response) => {
        return PostService.updatePost(request, response);
    }

    deletePost = (request, response) => {
        return PostService.deletePost(request, response);
    }
}

export default PostController;