import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: "jsdom", // browser-like env
    globals: true, // no need to import describe/it/expect
    setupFiles: "./src/test/setup.js" // runs before each test file
  }
});
