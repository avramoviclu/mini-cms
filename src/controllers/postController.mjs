import PostService from "../services/postService.mjs";

class PostController {
    static getPosts(request, response) {
        return PostService.getPosts(request, response);
    }

    static getPost(request, response) {
        return PostService.getPost(request, response);
    }

    static createPost(request, response) {
        return PostService.createPost(request, response);
    }

    static updatePost(request, response) {
        return PostService.updatePost(request, response);
    }

    static deletePost(request, response) {
        return PostService.deletePost(request, response);
    }
}

export default PostController;