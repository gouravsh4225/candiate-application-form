import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import alias from "./utlis/alias";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: "/",
//   resolve: {
//     alias: alias,
//   },
// });

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/candidate-application-form/",
    resolve: {
      alias,
    },
  };
  return config;
});
