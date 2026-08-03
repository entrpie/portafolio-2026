import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { browserslistToTargets } from 'lightningcss'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    lightningcss: {
      targets: browserslistToTargets(['chrome 105', 'firefox 103', 'safari 15.4', 'edge 105', 'ios_saf 15.4']),
    },
  },
})
