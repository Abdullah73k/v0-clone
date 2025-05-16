import { Request, Response } from "express";
import { claudeChatStream } from "../config/claude.js";

export let versions = [];

type CreateChatReqBody = {
	prompt: string;
	image: string;
};

export const postCreateChat = async (
	req: Request<{}, {}, CreateChatReqBody>,
	res: Response
) => {
	const { prompt, image } = req.body;

	if (typeof image !== "string") {
		res.status(400).send("Image file is required");
		console.log(typeof image);
		return;
	}

	try {
		const result = await claudeChatStream(prompt, image);

		res.status(200).json({ result });
	} catch (error) {
		console.error("Streaming error:", error);
		res.status(500).json("Internal server error, could not get object");
	}
};

export const getChat = () => {};

export const postChatToExistingChat = () => {};
