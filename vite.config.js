import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/fe-2-diplom/",
  plugins: [react()],
  optimizeDeps: {
    exclude: ["@smastrom/react-rating"],
  },
});
