import api from "./axios";
import { Task } from "../interfaces/index";

export const createTask = async (task: Task) => {
  try {
    return await api.post("/tasks", task);
  } catch (error) {
    console.log(error);
  }
};
