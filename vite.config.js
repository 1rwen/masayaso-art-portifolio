import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/masayaso-art-portifolio/", // This matches the homepage subpath
});
