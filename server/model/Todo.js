import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  data: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
  email: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
    enum: ["low", "medium", "high"],
  },
  dueDate: {
    type: Date,
    required: true, 
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Todo = mongoose.model("Todo", TodoSchema);

export default Todo;
