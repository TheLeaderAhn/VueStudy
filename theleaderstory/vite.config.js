const path = require('path')

module.exports = {
  alias: {
    '/@/': path.resolve(__dirname, './src'),
    '/@components/': path.resolve(__dirname, './src/components'),
    '/@app_modules/': path.resolve(__dirname, './src/modules'),
  },
}

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, './src'),
      '/@components': path.resolve(__dirname, './src/components'),
      '/@app_modules': path.resolve(__dirname, './src/modules'),
    },
    extensions: [".js"]
  },
  plugins: [vue()]
})
