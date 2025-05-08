import { Request, Response } from "express";
import { claudeChatStream } from "../config/claude.js";

export const postCreateChat = async (req: Request, res: Response) => {
	const { prompt } = req.body;

	try {
		const stream = await claudeChatStream(prompt);

		res.setHeader("Content-Type", "text/plain; charset=utf-8");
		res.setHeader("Transfer-Encoding", "chunked");

		for await (const token of stream) {
			res.write(token);
		}

		res.end();
	} catch (error) {
		console.error("Streaming error:", error);
		res.status(500).send("Error streaming Claude response");
	}
};

export const getChat = () => {
	
}
