import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/mongo.js";
import chatRoutes from "./routes/chat.routes.js";
import multer from "multer";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT;

// app.use(multer({ dest: "images" }).single("file"));
app.use(express.json({limit: "10mb"}));
app.use(cors({ origin: process.env.ORIGIN }));

app.use("/api/chat", chatRoutes);

app.listen(PORT, () => {
	console.log(`Server is listing on http://localhost:${PORT}`);
});
