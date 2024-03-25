import axiosInstance from "@/app/utils/axiosInstance";

export const getProjects = async () => {
  try {
    const response = await axiosInstance.get("api/projects/");

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProject = async (projectId: string) => {
  try {
    const response = await axiosInstance.get(`api/projects/${projectId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createProject = async (project: any) => {
  try {
    const response = await axiosInstance.post("api/projects/", project);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProject = async (projectId: string, project: any) => {
  try {
    const response = await axiosInstance.put(
      `api/projects/${projectId}`,
      project
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProject = async (projectId: string) => {
  try {
    const response = await axiosInstance.delete(`/projects/${projectId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
