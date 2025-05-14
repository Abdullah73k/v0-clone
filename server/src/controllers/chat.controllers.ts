import { Request, Response } from "express";
import { claudeChatStream } from "../config/claude.js";

export let versions = [];

type CreateChatReqBody = {
	prompt: string,
	image: string
}

export const postCreateChat = async (req: Request<{}, {}, CreateChatReqBody>, res: Response) => {
	const { prompt, image } = req.body;

	try {
		const stream = await claudeChatStream(prompt, image);

		res.setHeader("Content-Type", "text/plain; charset=utf-8");
		res.setHeader("Transfer-Encoding", "chunked");

		const reader = stream.getReader();
		const encoder = new TextEncoder();

		for await (const chunk of stream) {
			res.write(chunk); // Or however you stream Claude's output
		  }
		  res.end();
		  
	} catch (error) {
		console.error("Streaming error:", error);
		res.status(500).send("Error streaming Claude response");
	}
};

export const getChat = () => {};

export const postChatToExistingChat = () => {};
