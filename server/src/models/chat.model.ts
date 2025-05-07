// models/chat.model.ts
import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
  {
    role: { type: String, enum: ['user', 'assistant'], required: true },
    content: { type: String, required: true }, // includes prompt and AI explanation
  },
  { _id: false }
);

const fileSchema = new mongoose.Schema(
  {
    filename: { type: String, required: true }, // e.g. "App.tsx"
    content: { type: String, required: true },
  },
  { _id: false }
);

const codeVersionSchema = new mongoose.Schema(
  {
    version: { type: Number, required: true },
    files: [fileSchema], // an array of code files
  },
  { _id: false }
);

const chatSchema = new mongoose.Schema(
  {
    messages: [messageSchema],
    codeVersions: [codeVersionSchema],
    favorite: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('Chat', chatSchema);
