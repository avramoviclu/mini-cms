import postService from "../services/postService.mjs";

class PostController {
    static getPosts(request, response) {
        return postService.getPosts(request, response);
    }

    static getPost(request, response) {
        return postService.getPost(request, response);
    }

    static createPost(request, response) {
        return postService.createPost(request, response);
    }

    static updatePost(request, response) {
        return postService.updatePost(request, response);
    }

    static deletePost(request, response) {
        return postService.deletePost(request, response);
    }
}

export default PostController;