// populateUsers.js (with ES modules)
import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "../models/userModel.js"; // Import the User model

dotenv.config();

async function populateUsers() {
  try {
    await mongoose.connect("mongodb://localhost:27017/mevn_url_shortener");
    console.log("MongoDB Connected");

    // Create an array of dummy users
    const dummyUsers = [
      { username: "Nate", email: "nate@example.com", password: "password" },
      { username: "Mello", email: "mello@example.com", password: "password" },
      { username: "Green", email: "green@example.com", password: "password" },
    ];

    // Insert the dummy users into the database
    await User.insertMany(dummyUsers);
    console.log("Dummy users inserted");

    // Close the connection (optional, but good practice):
    await mongoose.disconnect();
    console.log("MongoDB Disconnected");
  } catch (error) {
    console.error("Error:", error);
  }
}

populateUsers();
