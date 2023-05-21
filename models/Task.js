/* 
schema for creating a group or table for the mongoDB for storing indiviual tasks

*/


import mongoose from "mongoose";
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "enter name"],
    trim: (value) => value.trim().split(" ")[0],
    maxlength: [20, "name  cannot be more than 20 character"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Task", TaskSchema);