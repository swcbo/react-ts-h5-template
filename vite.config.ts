import proxy from './config/proxy';
import { resolve } from 'path';
import type { ConfigEnv, UserConfig } from 'vite';
import { loadEnv } from 'vite';
import { VITE_DROP_CONSOLE, VITE_BASE_PATH } from './config/constant';
import { createVitePlugins } from './config/plugins';
import { themeVariables } from './config/theme';

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build';
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const { VITE_PORT, VITE_HTTP_API } = env;

  return {
    root: process.cwd(),
    publicDir: 'public',
    base: VITE_BASE_PATH,
    plugins: createVitePlugins(mode, isBuild),
    css: {
      modules: {
        generateScopedName: '[name]__[local]___[hash:base64:5]',
        hashPrefix: 'prefix',
      },
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: themeVariables,
        },
      },
    },
    resolve: {
      alias: {
        '@': `${resolve(__dirname, 'src')}`,
      },
      // 解析package.json中的字段
      // mainFields: ['module', 'jsnext:main', 'jsnext'],
      // 导入时想要省略的扩展名列表
      // extensions: ['.less', '.js', '.ts', '.jsx', '.tsx', '.json', '.scss'],
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
      port: parseInt(VITE_PORT),
      proxy: proxy(VITE_HTTP_API),
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
      minify: 'terser',
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
            'antd-mobile': ['antd-mobile'],
          },
        },
      },
      // 传递给 Terser 的更多 minify 选项。
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: VITE_DROP_CONSOLE,
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
