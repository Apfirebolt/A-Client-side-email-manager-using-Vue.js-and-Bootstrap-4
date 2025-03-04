// index.js (with ES modules)
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from '../models/userModel.js'; // Import the User model

dotenv.config();

async function connectAndShowUsers() {
  try {
    await mongoose.connect("mongodb://localhost:27017/mevn_url_shortener");
    console.log('MongoDB Connected');

    // Fetch all users
    const users = await User.find({});
    console.log('Users:', users);

    // Optionally, process the users:
    if (users && users.length > 0) {
      users.forEach(user => {
        console.log(`Username: ${user.username}, Email: ${user.email}`);
      });
    } else {
        console.log("No users found");
    }

    // Close the connection (optional, but good practice):
    await mongoose.disconnect();
    console.log('MongoDB Disconnected');

  } catch (error) {
    console.error('Error:', error);
  }
}

connectAndShowUsers();

export default connectAndShowUsers;