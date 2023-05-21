/*
  Name : Task Manager,
  version : 0.3.5,
  author : Sandesh Bhusal,
  purpose : Educational

*/
import express from "express";
import task from "./routers/tasks.js";
import connectToDatabase from "./db/connect.js";
import { config } from "dotenv";
import notFound from "./middleware/not-found.js";
const app = express();
const port = 3000;

//env config
config();

// Middlewares

app.use(express.static("./public")); //frontend
app.use(express.json()); //data transfer to custom Middleware and default
app.use("/api/v1/tasks", task); //custom Middleware
app.use (notFound)

// Start the server
const startServer = async () => {
  try {
    await connectToDatabase(process.env.MONGODB_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

startServer();
