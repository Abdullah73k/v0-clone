export function convertFileToBase64(file: File): Promise<string> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => {
			const result = reader.result?.toString() || "";
			const base64 = result.split(",")[1]
			resolve(base64);
		};
		reader.onerror = reject;
		reader.readAsDataURL(file); // base64 with metadata
	});
}
