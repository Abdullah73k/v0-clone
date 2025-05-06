import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI;

export async function connectDB() {
	try {
		await mongoose.connect(uri || "");
		console.log("Connected to MongoDB");
	} catch (error) {
		console.error("Failed to connect to DB", error);
	}
}
