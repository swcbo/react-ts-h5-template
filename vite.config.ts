/*
 * @Author: 筱白
 * @Date: 2021-07-28 14:14:23
 * @LastEditors: 小白
 * @LastEditTime: 2021-09-16 00:22:12
 * @Description: 配置文件
 */
import legacy from '@vitejs/plugin-legacy';
import type { ConfigEnv, UserConfig } from 'vite';
import { resolve } from 'path';
import { loadEnv } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build';
  const root = process.cwd();
  const COMPRESS_GZIP = false;
  const ANALYZE = false;
  const env = loadEnv(mode, root);
  const { VITE_PORT, VITE_HTTP_API } = env;

  return {
    // 项目根目录
    root: process.cwd(),
    // 静态资源服务的文件夹
    publicDir: 'public',
    // 项目部署的基础路径
    base: '/',
    esbuild: {
      jsxInject: `import React from 'react'`,
    },
    plugins: [
      // reactRefresh
      reactRefresh(),
      // legacy
      mode === 'legacy' &&
        legacy({
          targets: ['ie >= 11'],
          additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
        }),
      // ANALYZE
      ANALYZE &&
        visualizer({
          filename: './node_modules/.cache/visualizer/stats.html',
          open: true,
          gzipSize: true,
          brotliSize: true,
        }),
      // COMPRESS_GZIP
      COMPRESS_GZIP && isBuild && viteCompression({ deleteOriginFile: false }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/assets/css/variables.scss";',
        },
      },
    },
    resolve: {
      // 别名
      alias: {
        '@': `${resolve(__dirname, 'src')}`,
        '@images': `${resolve(__dirname, 'src/assets/images')}`,
      },
      // 解析package.json中的字段
      mainFields: ['module', 'jsnext:main', 'jsnext'],
      // 导入时想要省略的扩展名列表
      extensions: ['.less', '.js', '.ts', '.jsx', '.tsx', '.json', '.scss'],
    },
    json: {
      // 是否支持从 .json 文件中进行按名导入
      namedExports: true,
      // 若设置为 true，导入的 JSON 会被转换为 export default JSON.parse("...") 会比转译成对象字面量性能更好， 尤其是当 JSON 文件较大的时候。开启此项，则会禁用按名导入
      stringify: false,
    },
    // 设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息
    clearScreen: false,
    // 调整控制台输出的级别 'info' | 'warn' | 'error' | 'silent'
    logLevel: 'info',
    server: {
      open: true,
      host: '0.0.0.0',
      port: Number(VITE_PORT),
      proxy: {
        '/api': {
          target: VITE_HTTP_API,
          changeOrigin: true,
        },
      },
    },
    // optimizeDeps: {
    //   include: ['moment/dist/locale/zh-cn'],
    //   exclude: ['moment/dist/locale/*'],
    // },
    build: {
      // 浏览器兼容性  "esnext"|"modules"
      target: 'modules',
      // 输出路径
      outDir: 'build',
      // 生成静态资源的存放路径
      assetsDir: 'assets',
      // 启用/禁用 CSS 代码拆分
      cssCodeSplit: true,
      // 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项
      assetsInlineLimit: 4096,
      // 构建后是否生成 source map 文件
      sourcemap: false,
      // 设置为 false 可以禁用最小化混淆，或是用来指定使用哪种混淆器 boolean | 'terser' | 'esbuild'
      minify: !isBuild ? 'esbuild' : 'terser',
      // chunk 大小警告的限制
      chunkSizeWarningLimit: 500,
      // 启用/禁用 brotli 压缩大小报告
      brotliSize: true,
      // 默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
      emptyOutDir: true,
      // 当设置为 true，构建后将会生成 manifest.json 文件
      manifest: false,
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react'],
          },
        },
      },
      // 传递给 Terser 的更多 minify 选项。
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: isBuild,
        },
      },
    },
    // 全局变量替换 Record<string, string>
    define: {
      _GLOBAL_VARS_: JSON.stringify({
        ...env,
        MODE: mode,
        BUILD_TIME: new Date().toLocaleString(),
      }),
    },
  };
};
