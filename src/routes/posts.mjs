import { Router } from "express";

const router = Router();

router.get("/api/v1/posts", (request, response) => {});

router.get("/api/v1/posts/:postId", (request, response) => {});

router.put("/api/v1/posts/:postId", (request, response) => {});

router.delete("/api/v1/posts/:postId", (request, response) => {});

export default router;