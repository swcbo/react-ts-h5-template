import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import type { PluginOption } from 'vite';
import viteCompression from 'vite-plugin-compression';

import {
  VITE_APP_ANALYZE,
  VITE_APP_COMPRESS_GZIP,
  VITE_APP_COMPRESS_GZIP_DELETE_FILE,
  VITE_APP_LEGACY,
} from '../constant';
import styleImport from './styleImport';
import visualizerPlugin from './visualizer';

export const createVitePlugins = (viteEnv: string, isBuild: boolean) => {
  const vitePlugins: (PluginOption | PluginOption[])[] = [react()];
  // legacy
  VITE_APP_LEGACY && isBuild && vitePlugins.push(legacy());
  //  style
  vitePlugins.push(styleImport());
  // visualizer
  VITE_APP_ANALYZE && vitePlugins.push(visualizerPlugin());
  if (isBuild) {
    // gzip
    VITE_APP_COMPRESS_GZIP &&
      vitePlugins.push(
        viteCompression({
          deleteOriginFile: VITE_APP_COMPRESS_GZIP_DELETE_FILE,
        }),
      );
  }

  return vitePlugins;
};
