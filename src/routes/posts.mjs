import { Router } from "express";
import PostController from "../controllers/postController.mjs";

const router = Router();

router.get("/api/v1/posts", PostController.getPosts);

router.post("/api/v1/posts", PostController.createPost);

router.get("/api/v1/posts/:postId", PostController.getPost);

router.put("/api/v1/posts/:postId", PostController.updatePost);

router.delete("/api/v1/posts/:postId", PostController.deletePost);

export default router;