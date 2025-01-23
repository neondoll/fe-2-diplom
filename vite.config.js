import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/fe-2-diplom/",
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    exclude: ["@smastrom/react-rating"],
  },
});
