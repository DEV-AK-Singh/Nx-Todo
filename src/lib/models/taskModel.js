import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  task: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  priority: { type: String, required: true },
});

export default mongoose.models.tasks || mongoose.model("tasks",taskSchema);