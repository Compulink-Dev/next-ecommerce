// lib/mongoose.ts

import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGODB_URI || '';

if (!MONGO_URI) {
  throw new Error('Please define the MONGO_URI environment variable inside .env.local');
}

// Initialize Mongoose connection
const dbConnect = async () => {
  try {
    setTimeout(async function () {
      await mongoose.connect(MONGO_URI, {
        serverSelectionTimeoutMS: 20000
      });
    }, 80000)
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process with failure
  }
};

export default dbConnect;
