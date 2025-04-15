import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react-swc";
// https://vite.dev/config/
import path from "path";

export default defineConfig({
  base: "/Ronaldo-portfolio/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});