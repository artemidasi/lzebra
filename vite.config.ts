import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import Inspect from 'vite-plugin-inspect'
import tsconfigPaths from 'vite-tsconfig-paths';
import zipPack from "vite-plugin-zip-pack";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react(), Inspect(), zipPack()],

  server: {
    port: 6600,
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&display=swap');

          @import "./src/shared/styles/_theme.scss";
          @import "./src/shared/styles/_global.scss";
          
          @import "normalize-scss/fork-version/_normalize.scss";
          @import "normalize-scss/fork-version/_variables.scss";
          @import "normalize-scss/fork-version/_vertical-rhythm.scss";
        `
      }
    }
  }
});
