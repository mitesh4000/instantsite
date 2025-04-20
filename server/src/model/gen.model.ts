import mongoose from "mongoose";

const genSchema = new mongoose.Schema({
  html: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Gen = mongoose.model("Gen", genSchema);
