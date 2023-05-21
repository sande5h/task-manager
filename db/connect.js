import mongoose from 'mongoose';

const connectToDatabase = async (url) => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB...');
  } catch (error) {
    console.log(error);
    throw new Error('Failed to connect to MongoDB');
  }
};

export default connectToDatabase;
