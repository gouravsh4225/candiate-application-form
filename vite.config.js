import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import alias from "./utlis/alias";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: alias,
  },
});
