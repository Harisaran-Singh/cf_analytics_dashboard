import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/cf_analytics_dashboard/',
  plugins: [react()],
});
