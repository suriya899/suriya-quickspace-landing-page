// vite.config.js
// ตั้งค่า Vite ให้รู้จัก Tailwind CSS
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // เพิ่ม Tailwind เป็น plugin
  ],
  
});
