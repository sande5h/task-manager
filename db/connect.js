/*
Connecting to mongoDB and it is setup in 
a way that the server is started only if 
the databse is connected


The server start is taking long time and is
 crashing if called connection multiple time
in interval of few minutes while developing 
and using nodemon to auto refresh on change


fix for next time
*/


import mongoose from 'mongoose';

const connectToDatabase = async (url) => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log('Connected to MongoDB...');
  } catch (error) {
    console.log(error);
    throw new Error('Failed to connect to MongoDB');
  }
};

export default connectToDatabase;
