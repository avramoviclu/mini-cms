import { Router } from "express";
import { 
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost

} from "../controllers/postController.mjs";

const router = Router();

router.get("/api/v1/posts", getPosts);

router.post("/api/v1/posts", createPost);

router.get("/api/v1/posts/:postId", getPost);

router.put("/api/v1/posts/:postId", updatePost);

router.delete("/api/v1/posts/:postId", deletePost);

export default router;