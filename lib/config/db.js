import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // load env variables from .env

export const ConnectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in .env file");
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");
  } catch (error) {
    console.error("DB Connection Failed:", error);
  }
};
