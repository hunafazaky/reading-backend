import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error("process.env.MONGO_URI undefined.");
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    err instanceof Error
      ? console.error(`Error: ${err.message}`)
      : console.error(`Unexpected Database Error: ${err}`);
    process.exit();
  }
};

export default connectDB;
