import axiosInstance from "@/app/utils/axiosInstance";

import cookie from "cookie";

const setToken = (token: string) => {
  document.cookie = cookie.serialize("token", token, {
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  });
};

const getToken = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies.token;
};

export const deleteToken = () => {
  document.cookie = cookie.serialize("token", "", {
    maxAge: -1, // Expire the cookie
    path: "/",
  });
};

export const isAuthenticated = async () => {
  const token = getToken();
  if (!token) {
    return false;
  }
  try {
    const response = await axiosInstance.get("/auth/profile/");
    return response.status === 200;
  } catch (error) {
    deleteToken();
    return false;
  }
};

export const signIn = async (credentials: any) => {
  try {
    const data = {
      username: credentials.email,
      password: credentials.password,
    };

    const response = await axiosInstance.post("/auth/signin/", data);
    const { token } = response.data;

    setToken(token);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signUp = async (credentials: any) => {
  try {
    const response = await axiosInstance.post("/auth/signup/", credentials);
    const { token } = response.data;
    setToken(token);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  try {
    const response = await axiosInstance.post("/auth/signout/");
    deleteToken();
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProfile = async () => {
  try {
    const response = await axiosInstance.get("/auth/profile/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProfile = async (profile: any) => {
  try {
    const response = await axiosInstance.put("/auth/profile/", profile);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProfile = async () => {
  try {
    const response = await axiosInstance.delete("/auth/profile/");
    return response.data;
  } catch (error) {
    throw error;
  }
};
