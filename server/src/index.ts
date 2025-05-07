import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/mongo.js";
import chatRoutes from "./routes/chat.routes.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors({ origin: process.env.ORIGIN }));

app.use("/api/chat", chatRoutes);

app.listen(PORT, () => {
	console.log(`Server is listing on http://localhost:${PORT}`);
});
