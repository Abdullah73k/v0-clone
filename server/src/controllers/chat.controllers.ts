import { Request, Response } from "express";
import { claudeChatStream } from "../config/claude.js";
import { convertImageToBase64 } from "../utils/convertToBase64.js";

export let versions = [];

type CreateChatReqBody = {
	prompt: string;
};

export const postCreateChat = async (
	req: Request<{}, {}, CreateChatReqBody>,
	res: Response
) => {
	const { prompt } = req.body;
	const image = req.file;
	const base64Image = image?.path ? await convertImageToBase64(image.path) : null;
	console.log(base64Image)

	if (!image) {
		res.status(400).send("Image file is required");
		return;
	}
	console.log(image);

	try {
		const result = await claudeChatStream(prompt, base64Image || ""); // Assuming `image.path` contains the file path as a string

		res.json({ result });
	} catch (error) {
		console.error("Streaming error:", error);
		res.status(500).send("Error streaming Claude response");
	}
};

export const getChat = () => {};

export const postChatToExistingChat = () => {};
