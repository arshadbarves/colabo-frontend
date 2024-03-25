import axiosInstance from "@/app/utils/axiosInstance";

export const getTasks = async () => {
  try {
    const response = await axiosInstance.get("/tasks");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTask = async (taskId: string) => {
  try {
    const response = await axiosInstance.get(`/tasks/${taskId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createTask = async (task: any) => {
  try {
    const response = await axiosInstance.post("/tasks", task);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateTask = async (taskId: string, task: any) => {
  try {
    const response = await axiosInstance.put(`/tasks/${taskId}`, task);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTask = async (taskId: string) => {
  try {
    const response = await axiosInstance.delete(`/tasks/${taskId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
