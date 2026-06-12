import { useMutation } from "@tanstack/react-query";
import { loginUser, fetchUsers } from "../api/auth.api";
import { useAuthStore } from "../store/useAuthStore";

export const useLogin = () => {
  const setAuth = useAuthStore((s) => s.setAuth);

  return useMutation({
    mutationFn: loginUser,

    onSuccess: async (data, variables) => {
      // data = { token: 'eyJhbG...' }
      // variables = { username, password } — what user typed

      // Fetch all users to find the logged in user
      const users = await fetchUsers();
      const matchedUser = users.find((u) => u.username === variables.username);

      // Store user + token in Zustand
      setAuth(matchedUser, data.token);
    }
  });
};
