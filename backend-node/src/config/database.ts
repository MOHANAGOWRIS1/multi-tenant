import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);

    console.log('MongoDB Atlas Connected Successfully');
  } catch (error: unknown) {
    console.error('MongoDB Connection Error:', error);
    process.exit(1);
  }
};

export default connectDB;