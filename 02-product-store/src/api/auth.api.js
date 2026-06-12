import { api } from "../lib/axios";

// POST — login, returns token
export const loginUser = async ({ username, password }) => {
  const { data } = await api.post("/auth/login", { username, password });
  return data; // { token: 'eyJhbG...' }
};

// GET — fetch user by id after login
export const fetchUser = async (id) => {
  const { data } = await api.get(`/users/${id}`);
  return data;
};

// GET — fetch all users (to find matching username)
export const fetchUsers = async () => {
  const { data } = await api.get("/users");
  return data;
};
