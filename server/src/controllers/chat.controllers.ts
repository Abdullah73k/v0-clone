import { Request, Response } from "express";
import { claudeChat } from "../config/claude.js";

export const postCreateChat = async (req: Request, res: Response) => {
	const { prompt } = req.body;
	const {text} = await claudeChat(prompt);

	console.log(text)
    res.json({text})
};

export const getChat = async (req: Request, res: Response) => {
	const { id } = req.params;
};
