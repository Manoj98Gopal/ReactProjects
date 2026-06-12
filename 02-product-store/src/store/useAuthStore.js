import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const authStore = (set) => ({
  // state
  user: null,
  token: null,
  isAuthenticated: false,

  // action
  setAuth: (user, token) =>
    set({ user, token, isAuthenticated: true }, false, "auth/setAuth"),

  logout: () =>
    set(
      { user: null, token: null, isAuthenticated: false },
      false,
      "auth/logout"
    )
});

export const useAuthStore = create(
  devtools(persist(authStore, { name: "auth-storage" }))
);
