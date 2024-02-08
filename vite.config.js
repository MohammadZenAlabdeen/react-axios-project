import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base:"/react-axios-project/",
  plugins: [react()],
  optimizeDeps: {
    include: ['@emotion/styled'],
  },
});
