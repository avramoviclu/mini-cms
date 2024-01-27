import { Router } from "express";
import TagController from "../controllers/tagController.mjs";

const router = Router();

router.get("/api/v1/tags", TagController.getTags);

router.post("/api/v1/tags", TagController.createTag);

router.get("/api/v1/tags/:tagId", TagController.getTag);

router.put("/api/v1/tags/:tagId", TagController.updateTag);

router.delete("/api/v1/tags/:tagId", TagController.deleteTag);

export default router;