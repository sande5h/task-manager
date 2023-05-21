import express from 'express';
import task from './routers/tasks.js';
import connectToDatabase from './db/connect.js';
import { config } from 'dotenv';
const app = express();
const port = 3000;


//env config
config();




// Middleware for data transfer
app.use(express.json());
//custom Middleware
app.use("/api/v1/tasks", task);
// Routes
app.get('/hello', (req, res) => {
  res.send('Task Manager App');
});

// Start the server
const startServer = async () => {
  try {
    await connectToDatabase(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1); // Exit the process with a failure code
  }
};

startServer();
