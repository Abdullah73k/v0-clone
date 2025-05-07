import { Router } from "express";
import { postCreateChat, getChat } from "../controllers/chat.controllers.js";

const router = Router();

router.post("/", postCreateChat);
router.get("/:id", getChat);

export default router;
