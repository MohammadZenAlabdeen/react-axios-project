import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base:"./books-website-with-axios-and-react-hooks",
  plugins: [react()],
  optimizeDeps: {
    include: ['@emotion/styled'],
  },
});
