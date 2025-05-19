import { generateText, CoreMessage, streamObject, generateObject } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { openai } from "@ai-sdk/openai";
import { systemPrompt } from "./system-prompt.js";
import { z } from "zod";

export let messages: CoreMessage[];

export const claudeChatStream = async (
	userPrompt: string,
	userImage: string
) => {
	messages = [
		{
			role: "system",
			content: systemPrompt,
		},
		{
			role: "user",
			content: [
				{
					type: "image",
					image: userImage,
				},
				{
					type: "text",
					text: userPrompt,
				},
			],
		},
	];

	const { object } = await generateObject({
		model: openai("gpt-4.1-mini"),
		schema: z.object({
			text: z.string(),
			version: z.string().optional(),
			components: z.array(
				z.object({
					name: z.string(),
					content: z.record(z.string(), z.string()),
				})
			),
			main: z.object({
				name: z.string(),
				content: z.record(z.string(), z.string()),
			}),
		}),
		messages: messages,
		temperature: 0.4,
	});

	return object;
};
