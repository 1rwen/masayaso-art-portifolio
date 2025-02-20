import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Dynamically set base depending on the environment
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base:
    mode === "production" && process.env.DEPLOY_ENV === "github"
      ? "/masayaso-art-portifolio/"
      : "/", // Use "/" for Vercel
}));
