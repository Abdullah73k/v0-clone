import { generateText, CoreMessage } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { systemPrompt } from "./system-prompt.js";

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

	const result = generateText({
		model: anthropic("claude-3-7-sonnet-20250219"),
		messages: messages,
		providerOptions: {
			anthropic: {
				thinking: { type: "enabled", budgetTokens: 1200 },
				cacheControl: { type: "ephemeral" },
			},
		},
		temperature: 0.4,
	});

	return result; // this is the ReadableStream
};
