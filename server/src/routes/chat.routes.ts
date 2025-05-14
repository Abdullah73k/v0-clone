import { Router } from "express";
import { postCreateChat, getChat, postChatToExistingChat } from "../controllers/chat.controllers.js";

const router = Router();

router.post("/", postCreateChat);
router.get("/:id", getChat);
router.post("/:id", postChatToExistingChat)

export default router;
