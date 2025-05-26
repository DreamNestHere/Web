import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Web/', // ← 你的 GitHub repo 名稱
  plugins: [react()],
}) 