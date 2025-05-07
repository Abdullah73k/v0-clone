import { generateText } from "ai";
import { anthropic, AnthropicProviderOptions } from "@ai-sdk/anthropic";

export const claudeChat = async (prompt: string) => {
	const { text } = await generateText({
		model: anthropic("claude-3-haiku-20240307"),
		messages: [
			{ role: "system", content: "You are an export React frontend developer" },
			{ role: "user", content: prompt },
		],
		// providerOptions: {
		// 	anthropic: {
		// 		thinking: { type: "enabled", budgetTokens: 1200 },
		// 	},
		// },
	});

	return {
		text
	};
};
