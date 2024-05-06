import PostService from '../services/postService.mjs';

class PostController {
    static getPosts = async (request, response) => {
        try {
            const posts = await PostService.getPosts();
            response.json(posts);
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    }

    static getPost = async (request, response) => {
        try {
            const post = await PostService.getPost(request.params.id);
            if (post) {
                response.json(post);
            } else {
                response.status(404).json({ message: 'Post not found' });
            }
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    }

    static createPost = async (request, response) => {
        try {
            const newPost = await PostService.createPost(request.body);
            response.status(201).json(newPost);
        } catch (error) {
            response.status(400).json({ message: error.message });
        }
    }

    static updatePost = async (request, response) => {
        try {
            const updatedPost = await PostService.updatePost(request.params.id, request.body);
            response.json(updatedPost);
        } catch (error) {
            response.status(400).json({ message: error.message });
        }
    }

    static deletePost = async (request, response) => {
        try {
            await PostService.deletePost(request.params.id);
            response.json({ message: 'Post successfully deleted' });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    }
}

export default PostController;