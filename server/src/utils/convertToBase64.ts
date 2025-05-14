import fs from "fs/promises";

export async function convertImageToBase64(imagePath: string): Promise<string> {
	const imageBuffer = await fs.readFile(imagePath);
	return imageBuffer.toString("base64");
}
