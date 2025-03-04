// deleteUsers.js (with ES modules)
import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "../models/userModel.js"; // Import the User model

dotenv.config();

async function connectAndDeleteUsers() {
  try {
    await mongoose.connect("mongodb://localhost:27017/gmail_clone");
    console.log("MongoDB Connected");

    // Delete all users
    const result = await User.deleteMany({});
    console.log("Deleted Users:", result.deletedCount);

    // Close the connection (optional, but good practice):
    await mongoose.disconnect();
    console.log("MongoDB Disconnected");
  } catch (error) {
    console.error("Error:", error);
  }
}

connectAndDeleteUsers();
