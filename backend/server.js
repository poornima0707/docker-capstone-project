const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://db:27017/tasks");

// Schema
const Task = mongoose.model("Task", { name: String });

// Routes
app.get("/", (req, res) => {
    res.send("Backend is running");
});

app.get("/tasks", async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

app.post("/tasks", async (req, res) => {
    const task = new Task({ name: req.body.name });
    await task.save();
    res.json(task);
});

app.delete("/tasks/:id", async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.send("Deleted");
});

app.listen(5000, () => {
    console.log("Backend running on port 5000");
});
