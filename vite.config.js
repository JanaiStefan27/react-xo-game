import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  // Tip: To use a svg as component like: import MySvg from "../path/to/svg?react"
  plugins: [react(), svgr()],
});
