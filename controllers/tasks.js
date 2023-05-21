// ../controllers/tasks.js
import Task from "../models/Task.js";

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const createTask = async (req, res) => {
  try {
    const { name, ...rest } = req.body;
    const firstWord = name.trim().split(" ")[0];
    const task = await Task.create({ name: firstWord, ...rest });
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const getTask = async (req, res) => {
  try {
    const taskID = req.params.id;
    const task = await Task.findOne({ _id: taskID });

    if (!task) {
      return res.status(404).json({ msg: `no task with id :${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const taskID = req.params.id;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(200).json({ msg: `no task with id :${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const updateTask = async (req, res) => {
  try {
    const taskID = req.params.id;
    //trimming
    const { name, ...rest } = req.body;
    const updatedFields = { ...rest };
    if (name) {
      updatedFields.name = name.trim().split(" ")[0];
    }
    const task = await Task.findByIdAndUpdate({ _id: taskID }, updatedFields, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `no task with id :${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
