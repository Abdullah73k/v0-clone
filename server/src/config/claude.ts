import { streamText } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { systemPrompt } from "./system-prompt.js";

export const claudeChatStream = async (userPrompt: string) => {
	const result = await streamText({
		model: anthropic("claude-3-7-sonnet-20250219"),
		messages: [
			{
				role: "system",
				content: systemPrompt,
			},
			{
				role: "user",
				content: userPrompt,
			},
		],
		providerOptions: {
			anthropic: {
				thinking: { type: "enabled", budgetTokens: 1200 },
			},
		},
	});

	return result.textStream; // this is the ReadableStream
};
