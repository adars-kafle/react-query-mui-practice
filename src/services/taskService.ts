import axiosInstance from "../utils/axiosInstance";
import { type Task } from "../types";

// Create
const addTask = async (task: { title: string; description: string }) => {
  const response = await axiosInstance.post("/tasks/create-task", task);

  return response.data;
};

// Read
const getTasks = async () => {
  const response = await axiosInstance.get("/tasks/get-tasks");

  return response.data;
};

// Update
const updateTask = async (taskId: string, updatedTask: Partial<Task>) => {
  const response = await axiosInstance.put(
    `/tasks/update-task/${taskId}`,
    updatedTask
  );

  return response.data;
};

// Delete
const deleteTask = async (taskId: string) => {
  const response = await axiosInstance.delete(`/tasks/delete-task/${taskId}`);

  return response.data;
};

const taskService = {
  addTask,
  getTasks,
  updateTask,
  deleteTask,
};

export default taskService;
