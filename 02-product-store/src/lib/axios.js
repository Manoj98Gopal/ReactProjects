import axios from "axios";

export const api = axios.create({
  baseURL: "https://fakestoreapi.com"
});

// This runs before EVERY request automatically
api.interceptors.request.use((config) => {
  // Read token directly from localStorage
  // because zustand persist stores it there
  const storage = localStorage.getItem("auth-storage");
  const token = storage ? JSON.parse(storage)?.state?.token : null;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
