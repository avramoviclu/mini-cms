import { Router } from "express";

import { 
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    acceptInvitation,
    getInvitation,
    createInvitation
} from "../controllers/userController.mjs";

const router = Router();

router.get("/api/v1/admin/users", getUsers);

router.post("/api/v1/admin/users", createUser);

router.get("/api/v1/admin/users/:userId", getUser);

router.put("/api/v1/admin/users/:userId", updateUser);

router.delete("/api/v1/admin/users/:userId", deleteUser);

router.post("/api/v1/users/invites/:invitationId", acceptInvitation);

router.get("/api/v1/users/invites/:invitationId", getInvitation);

router.post("/api/v1/admin/users/invites", createInvitation);

export default router;